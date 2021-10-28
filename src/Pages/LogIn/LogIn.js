import React from 'react';
import { useLocation, useHistory, Link } from 'react-router-dom';
import logo from '../../images/logo.png'
import google from '../../images/google.png'
import useAuth from '../../hooks/useAuth';
import { Helmet } from 'react-helmet';
import './LogIn.css'

const LogIn = () => {
    // imports 
    const { signInUsingGoogle, setError, setIsLoading } = useAuth()

    const location = useLocation()
    const history = useHistory()
    const redirect_URI = location.state?.from || '/home'

    // sign in using google
    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_URI)
                setError('')
            }).catch((error) => {
                setError(error.message)
            }).finally(() => setIsLoading(false));
    }
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
                    <div className="login-content">
                        <h4>Login With</h4>
                        <button className="btn border w-75 login-btn" onClick={handleGoogleLogIn}>
                            <img src={google} alt="" style={{ height: "45px" }} className="me-2 rounded-circle p-1" />
                            <span>Continue With Google</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;