import React from 'react';
import './Events.css'
import food from '../../images/donate-food.jpg'

const Events = () => {
    return (
        <div className="event-bg">
            <div className="container py-5">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="bg-white radius p-3 d-flex event-body">
                            <img src={food} alt="" className="img-fluid event-img radius me-3" />
                            <div>
                                <h5>Donate Food</h5>
                                <p>28/10/2021</p>
                                <div className="event-btn">
                                    <button className="btn btn-secondary ">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Events;