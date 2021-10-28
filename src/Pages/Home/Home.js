import React from 'react';
import ScrollButton from '../../components/ScrollButton/ScrollButton';
import { Helmet } from 'react-helmet';
import './Home.css'
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import noImg from '../../images/no-img.png'
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2'

const Home = () => {
    const { user } = useAuth()

    const [events, setEvents] = useState([])
    useEffect(() => {
        fetch("https://helping-hand-shovon.herokuapp.com/events")
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])

    const notify = () => {
        if (!user.uid) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please Log In to Continue!',
            })
        }
    }

    return (
        <div>
            <div className="home-bg">
                <Header />
                <div className="justify-content-center align-items-center w-75 mx-auto">
                    <h1 className="text-center mt-5 py-3">I GROW BY HELPING PEOPLE IN NEED</h1>
                    <div className="d-flex align-items-center w-50 mx-auto top-box">
                        <input type="text" className="form-control py-2 pe-5" placeholder="Search" />
                        <div className="banner-search">
                            <button className="btn btn-primary">Search</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container py-5 mt-5 ">
                <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4 events">
                    {
                        events.map(event => {
                            return <div key={event._id} class="col">
                                <Link to={`/registration/${event._id}`} className="text-decoration-none" onClick={notify}>
                                    <div class="card h-100">
                                        <img src={event.image ? event.image : noImg} class="card-img-top" alt="..." />
                                        <div class="card-body" style={{ backgroundColor: `${event.backgroundColor}` }}>
                                            <h5 class="card-title">{event.title}</h5>
                                            {/* <p class="card-text"></p> */}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        })
                    }
                </div>
            </div>

            <ScrollButton />
            <Helmet>
                <title>Helping Hand</title>
                <meta name="This is the Home page of Helping Hand" content="Helping Hand- Volunteer Website" />
            </Helmet>
        </div>
    );
};

export default Home;