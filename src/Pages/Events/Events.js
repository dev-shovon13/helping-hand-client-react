import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'
import './Events.css'
import { Helmet } from 'react-helmet';

const Events = () => {
    const [events, setEvents] = useState([])
    useEffect(() => {
        fetch("https://helping-hand-shovon.herokuapp.com/userEvents")
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])

    // delete an user 
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
        <div className="event-bg">
            <Helmet>
                <title>Events | Helping Hand</title>
                <meta name="This is the events page of Helping Hand" content="Helping Hand- Volunteer Website" />
            </Helmet>
            <div className="container py-5">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    {
                        events.map(event => {
                            return <div className="col">
                                <div className="bg-white radius p-3 d-flex event-body">
                                    <img src={event.image} alt="" className="img-fluid event-img radius me-3" />
                                    <div>
                                        <h5>{event.title}</h5>
                                        <p>{event.date.slice(0, 10)}</p>
                                        <div className="event-btn">
                                            <button className="btn btn-secondary " onClick={() => handleDelete(event._id)}>Cancel</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
            <ToastContainer theme="colored" />
        </div>
    );
};

export default Events;