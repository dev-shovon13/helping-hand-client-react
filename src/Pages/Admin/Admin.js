import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faPlus, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
import './Admin.css'

const Admin = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className="">
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
                                    <div className="row p-2 mx-1">
                                        <div className="col-3 text-secondary">Kawser Ahmed Shovon</div>
                                        <div className="col-3 text-secondary">shovon@gmail.com</div>
                                        <div className="col-2 text-secondary">28/10/2021</div>
                                        <div className="col-3 text-secondary">Help With Food</div>
                                        <div className="col-1 text-white"><FontAwesomeIcon icon={faTrashAlt} className="bg-danger rounded p-1 fs-4" /></div>
                                    </div>
                                    <div className="row p-2 mx-1">
                                        <div className="col-3 text-secondary">Kawser Ahmed Shovon</div>
                                        <div className="col-3 text-secondary">shovon@gmail.com</div>
                                        <div className="col-2 text-secondary">28/10/2021</div>
                                        <div className="col-3 text-secondary">Help With Food</div>
                                        <div className="col-1 text-white"><FontAwesomeIcon icon={faTrashAlt} className="bg-danger rounded p-1 fs-4" /></div>
                                    </div>
                                    <div className="row p-2 mx-1">
                                        <div className="col-3 text-secondary">Kawser Ahmed Shovon</div>
                                        <div className="col-3 text-secondary">shovon@gmail.com</div>
                                        <div className="col-2 text-secondary">28/10/2021</div>
                                        <div className="col-3 text-secondary">Help With Food</div>
                                        <div className="col-1 text-white"><FontAwesomeIcon icon={faTrashAlt} className="bg-danger rounded p-1 fs-4" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                            <h5 className="bg-white py-4 ps-5 text-dark">ADD EVENT</h5>
                            <div className="bg-admin p-2">
                                <div className="bg-white m-4 p-4 event-list text-dark">
                                    <form>
                                        <div className="row row-cols-2 g-4 fw-bold">
                                            <div className="col">
                                                <div class="mb-3">
                                                    <label class="form-label">Event Title</label>
                                                    <input type="text" class="form-control" placeholder="Event Title" />
                                                </div>
                                                <div class="mb-3">
                                                    <label class="form-label">Description</label>
                                                    <textarea class="form-control" placeholder="Details" id="floatingTextarea2" style={{ height: "100px" }}></textarea>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div class="mb-3">
                                                    <label class="form-label">Select Date</label>
                                                    <DatePicker className="form-control" selected={startDate} onChange={(date) => setStartDate(date)} dateFormat="dd/MM/yyyy" />
                                                </div>
                                                <label class="form-label">Banner</label><br />
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


        </div>
        // </div>
    );
};

export default Admin;