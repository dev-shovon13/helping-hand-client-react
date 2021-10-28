import React, { useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logo from '../../images/logo.png'
import './Registration.css'
import useAuth from '../../hooks/useAuth'
import DatePicker from "react-datepicker";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Registration = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [userEvent, setUserEvent] = useState({})
    const { user } = useAuth()
    const { id } = useParams()
    const history = useHistory()
    useEffect(() => {
        fetch(`https://helping-hand-shovon.herokuapp.com/events/${id}`)
            .then(res => res.json())
            .then(data => setUserEvent(data))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const nameRef = useRef()
    const emailRef = useRef()
    const dateRef = useRef()
    const infoRef = useRef()
    const titleRef = useRef()


    const submitHandler = (e) => {
        e.preventDefault()
        const title = titleRef.current.value
        const name = nameRef.current.value
        const email = emailRef.current.value
        const info = infoRef.current.value
        const date = startDate
        const image = userEvent.image

        const newEvent = { name, email, title, info, date, image }

        axios.post('https://helping-hand-shovon.herokuapp.com/userEvents', newEvent)
            .then(function (res) {
                if (res.data.insertedId) {
                    toast.success("Added Event Successfully")
                    e.target.reset()
                    // setUserEvent({})
                    setTimeout(() => history.push('/events'), 2000);
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    }



    return (
        <div className="pt-5 pb-5 text-center bg">
            <Helmet>
                <title>Registration | Helping Hand</title>
                <meta name="This is the registration page of Helping Hand" content="Helping Hand- Volunteer Website" />
            </Helmet>
            <div className="container mb-5 ">
                <Link to="/home">
                    <img src={logo} alt="" className="mb-5" height="50px" />
                </Link>
                <div className="bg-white shadow-sm border mx-auto log-width">
                    <div className="text-center p-5 pt-4">
                        <h5 className="mb-4">Register as a Volunteer</h5>
                        <form action="" onSubmit={submitHandler}>
                            <div className="mb-4">
                                <input type="text" className="reg-input w-100 border-bottom" placeholder="Full Name" value={user.displayName} ref={nameRef} />
                            </div>
                            <div className="mb-4">
                                <input type="text" className="reg-input w-100 border-bottom" placeholder="UserName or Email" value={user.email} ref={emailRef} />
                            </div>
                            <div className="mb-4 d-flex">
                                <DatePicker className="reg-input w-100 border-bottom" selected={startDate} onChange={(date) => setStartDate(date)} dateFormat="dd/MM/yyyy" ref={dateRef} />
                                <p className="text-start text-secondary w-50">( Pick a Date )</p>
                            </div>
                            <div className="mb-4">
                                <input type="text" className="reg-input w-100 border-bottom" placeholder="Description" ref={infoRef} />
                            </div>
                            <div className="mb-4">
                                <input type="text" className="reg-input w-100 border-bottom" placeholder="Event Name" value={userEvent.title} ref={titleRef} />
                            </div>
                            <button className="btn reg-btn w-100 text-white" type='submit'>Register</button>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer theme="colored" />
        </div>
    );
};

export default Registration;