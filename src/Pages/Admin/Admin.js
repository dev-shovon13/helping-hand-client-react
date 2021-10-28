import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faPlus, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
import './Admin.css'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2'

const Admin = () => {
    const [startDate, setStartDate] = useState(new Date());
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);

    const [events, setEvents] = useState([])
    useEffect(() => {
        fetch("https://helping-hand-shovon.herokuapp.com/userEvents")
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])

    const titleRef = useRef()
    const textRef = useRef()
    const imageRef = useRef()

    // ADD an Event
    const submitHandler = (e) => {
        e.preventDefault()
        const title = titleRef.current.value
        const text = textRef.current.value
        const date = startDate
        const image = imageRef.current.value
        const backgroundColor = `#${randomColor}`

        const newEvent = { title, text, date, image, backgroundColor }

        axios.post('https://helping-hand-shovon.herokuapp.com/events', newEvent)
            .then(function (res) {
                if (res.data.insertedId) {
                    toast.success("Added Event Successfully")
                    e.target.reset()
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    // delete an event 
    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            iconClass: "custom-icon",
            showCancelButton: true,
            confirmButtonClass: "swal-button",
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonClass: "swal-button",
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://helping-hand-shovon.herokuapp.com/userEvents/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            toast.error("Deleted User Successfully")
                            const remainingEvents = events.filter(event => event._id !== id)
                            setEvents(remainingEvents)
                        }
                    })
            }
        })
    }
    return (
        <div>
            <Helmet>
                <title>Admin Panel | Helping Hand</title>
                <meta name="This is the Admin page of Helping Hand" content="Helping Hand- Volunteer Website" />
            </Helmet>
            <div class="d-flex align-items-start">
                <div className="start">
                    <div class=" menu nav flex-column nav-pills bg-white p-5 pt-3 pe-0" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <Link to="/home">
                            <img src={logo} alt="" className="mb-3" height="40px" width="130px" />
                        </Link>
                        <span class="admin-btn my-2 active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true"><FontAwesomeIcon icon={faUserFriends} className="me-3" />Volunteer Register List</span>
                        <span class="admin-btn my-2 " id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false"><FontAwesomeIcon icon={faPlus} className="me-3" />Add Events</span>
                    </div>
                </div>
                <div className="end">
                    <div class="tab-content" id="v-pills-tabContent">
                        <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                            <h5 className="bg-white py-4 ps-5 text-dark">VOLUNTEER REGISTER LIST</h5>
                            <div className="bg-admin p-2">
                                <div className="bg-white m-4 p-4 event-list text-dark">
                                    <div className="row bg-title p-2 mx-1 mb-2">
                                        <div className="col-3 text-secondary">Name</div>
                                        <div className="col-3 text-secondary">Email ID</div>
                                        <div className="col-2 text-secondary">Registering Date</div>
                                        <div className="col-3 text-secondary">Event Name</div>
                                        <div className="col-1 text-secondary">Action</div>
                                    </div>
                                    {
                                        events.map(event => {
                                            return <div className="row p-2 mx-1">
                                                <div className="col-3 text-secondary">{event.name}</div>
                                                <div className="col-3 text-secondary">{event.email}</div>
                                                <div className="col-2 text-secondary">{event.date.slice(0, 10)}</div>
                                                <div className="col-3 text-secondary">{event.title}</div>
                                                <div className="col-1 text-white" onClick={() => handleDelete(event._id)}><FontAwesomeIcon icon={faTrashAlt} className="bg-danger rounded p-1 fs-4" /></div>
                                            </div>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                            <h5 className="bg-white py-4 ps-5 text-dark">ADD EVENT</h5>
                            <div className="bg-admin p-2">
                                <div className="bg-white m-4 p-4 event-list text-dark">
                                    <form onSubmit={submitHandler}>
                                        <div className="row row-cols-2 g-4 fw-bold">
                                            <div className="col">
                                                <div class="mb-3">
                                                    <label class="form-label">Event Title</label>
                                                    <input required ref={titleRef} type="text" class="form-control" placeholder="Event Title" />
                                                </div>
                                                <div class="mb-3">
                                                    <label class="form-label">Description</label>
                                                    <textarea ref={textRef} class="form-control" placeholder="Details" id="floatingTextarea2" style={{ height: "100px" }}></textarea>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div class="mb-3">
                                                    <label class="form-label">Select Date</label>
                                                    <DatePicker className="form-control" selected={startDate} onChange={(date) => setStartDate(date)} dateFormat="dd/MM/yyyy" />
                                                </div>
                                                <div class="mb-3">
                                                    <label class="form-label">Banner</label><br />
                                                    <input required ref={imageRef} type="text" class="form-control" placeholder="Please Give Valid Image Link" />
                                                </div>
                                                <p className="text-center mb-0">or,</p>
                                                <div class="input-group mb-3">
                                                    <input type="file" class="form-control" id="inputGroupFile02" />
                                                    <button class="input-group-text" for="inputGroupFile02">Upload</button>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" class="btn btn-primary">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer theme="colored" />
        </div>
    );
};

export default Admin;