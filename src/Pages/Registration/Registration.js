import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
import './Registration.css'


const Registration = () => {
    return (
        <div className="pt-5 pb-5 text-center bg">
            <Helmet>
                <title>Login | Helping Hand</title>
                <meta name="This is the login page of Helping Hand" content="Helping Hand- Volunteer Website" />
            </Helmet>
            <div className="container mb-5 ">
                <Link to="/home">
                    <img src={logo} alt="" className="mb-5" height="50px" />
                </Link>
                <div className="bg-white shadow-sm border mx-auto log-width">
                    <div className="text-center p-5 pt-4">
                        <h5 className="mb-4">Register as a Volunteer</h5>
                        <div class="mb-4">
                            <input type="text" class="reg-input w-100 border-bottom" placeholder="Full Name" />
                        </div>
                        <div class="mb-4">
                            <input type="text" class="reg-input w-100 border-bottom" placeholder="UserName or Email" />
                        </div>
                        <div class="mb-4">
                            <input type="text" class="reg-input w-100 border-bottom" placeholder="Date" />
                        </div>
                        <div class="mb-4">
                            <input type="text" class="reg-input w-100 border-bottom" placeholder="Description" />
                        </div>
                        <div class="mb-4">
                            <input type="text" class="reg-input w-100 border-bottom" placeholder="Event Name" />
                        </div>
                        <button className="btn reg-btn w-100 text-white">Register</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;