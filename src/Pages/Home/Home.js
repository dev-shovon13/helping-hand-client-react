import React from 'react';
import ScrollButton from '../../components/ScrollButton/ScrollButton';
import { Helmet } from 'react-helmet';
import './Home.css'
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

const Home = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
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
                <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 events">
                    <div class="col">
                        <Link to="/registration" className="text-decoration-none">
                            <div class="card h-100">
                                <img src="https://www.overallmotivation.com/wp-content/uploads/No-one-has-ever-become-poor-by-giving_charity-quotes.png" class="card-img-top" alt="..." />
                                <div class="card-body" style={{ backgroundColor: `#${randomColor}` }}>
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">a simple title here</p>
                                </div>
                            </div>
                        </Link>
                    </div>
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