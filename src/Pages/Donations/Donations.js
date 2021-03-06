import React from 'react';
import { Helmet } from 'react-helmet';
import './Donations.css'

const Donations = () => {
    return (
        <div className="text-center donations-bg">
            <Helmet>
                <title>Donations | Helping Hand</title>
                <meta name="This is the donations page of Helping Hand" content="Helping Hand- Volunteer Website" />
            </Helmet>
        </div>
    );
};

export default Donations;