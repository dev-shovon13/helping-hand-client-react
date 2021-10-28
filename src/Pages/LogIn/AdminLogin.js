import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import logo from '../../images/logo.png'
import { Helmet } from 'react-helmet';
import './LogIn.css'

const AdminLogIn = () => {
    const history = useHistory()
    const redirect_URI = '/admin'

    const handleSubmit = (e) => {
        e.preventDefault()
        history.push(redirect_URI)
    }

    return (
        <div className="pt-5 pb-5 text-center bg">
            <Helmet>
                <title>Admin Login | Helping Hand</title>
                <meta name="This is the Admin login page of Helping Hand" content="Helping Hand- Volunteer Website" />
            </Helmet>
            <div className="container mb-5 ">
                <Link to="/home">
                    <img src={logo} alt="" className="mb-5" height="50px" />
                </Link>
                <div className="bg-white shadow-sm border mx-auto log-width">
                    <div className="login-content p-5">
                        <h4 className="mb-5 fw-light text-primary">Admin Login</h4>
                        <form action="" onSubmit={handleSubmit}>
                            <input type="text" className="form-control mb-3" value='admin' />
                            <input type="password" className="form-control mb-3" value='1234' />
                            <button className="btn btn-primary w-100">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminLogIn;