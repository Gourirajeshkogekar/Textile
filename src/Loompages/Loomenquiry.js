import React, { useState, useEffect } from 'react';
import './Loomenquiry.css';
import { useLocation } from 'react-router-dom';

import { Button } from 'react-bootstrap';


function Enquiry({ onSubmit, onNotInterested }) {
    const [formData, setFormData] = useState({
        enquiryno: '', tradername: '', datefrom: ' ', dateto: '', fabricquality: '', totalfabriclength: '', agent: '', loomno: '',
        machinetype: '', width: '', rpm: '', sheddingtype: '', noofframes: '', nooffeeders: '', selvadgejacquard: '', topbeam: '', cramming: '', lenodesignequipment: '', availableloomdates: '', noofloomsrequired: '', noofloomstoassign: '', jobrateoffered: '', sendcounteroffer: ""
    });

    const [errors, setErrors] = useState('');

    const [availableLooms, setAvailableLooms] = useState([]);
    const [availabilityFormData, setAvailabilityFormData] = useState({
        availablefromdate: '',
        availabletodate: ''
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });

    }

    const handleCheckbox = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormData({ ...formData, [e.target.name]: value });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form validation logic here
        // If form is valid, submit the form data
        // Clear form fields after submission
        console.log(formData); // Example: You can log form data to console
        setFormData({
            enquiryno: '', tradername: '', datefrom: ' ', dateto: '', fabricquality: '', totalfabriclength: '', agent: '', loomno: '',
            machinetype: '', width: '', rpm: '', sheddingtype: '', noofframes: '', nooffeeders: '', selvadgejacquard: '', topbeam: '', cramming: '', lenodesignequipment: '', availablefromdate: ' ', availabletodate: '', availableloomdates: '', noofloomsrequired: '', noofloomstoassign: '', jobrateoffered: '', sendcounteroffer: ""
            // Reset other form fields here
        });

        onSubmit(formData);

    };

    const handleNotInterested = () => {
        // Show a confirmation pop-up when "Not Interested" button is clicked
        const confirmNotInterested = window.confirm('Are you sure you want to exit?');

        if (confirmNotInterested) {
            // Call the function passed as a prop if user confirms
            onNotInterested();
        }
    };







    const handleAvailabilityInputChange = (e) => {
        setAvailabilityFormData({ ...availabilityFormData, [e.target.name]: e.target.value });
    };


    const location = useLocation();
    const { selectedLoom } = location.state || {};

    useEffect(() => {
        // Filter available looms based on selected loom from booking page
        if (selectedLoom !== undefined) {
            const allLooms = Array.from({ length: 20 }, (_, i) => i + 1);
            const filteredLooms = allLooms.filter(loom => loom !== selectedLoom);
            setAvailableLooms(filteredLooms);
        }
    }, [location.state, selectedLoom]);

    console.log(selectedLoom);






    return (
        <>
            <form className='enquiry-form'>



                <div className="row">
                    <div className="col-md-4">
                        <label className="enquiry-label">
                            Enquiry No:
                        </label>
                        <div className='enquiry-group'>
                            <input
                                type="number"
                                id="enquiryno"
                                name='enquiryno'
                                value={formData.enquiryno}
                                onChange={handleInputChange}
                                className="enquiry-control"
                                placeholder='Enter Enquiry no'
                            />
                            {errors.enquiryno && (
                                <div className="text-danger">{errors.enquiryno}</div>
                            )}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label className="enquiry-label">
                            Traders Name:
                        </label>
                        <div className='enquiry-group'>
                            <select
                                id="tradername"
                                name='tradername'
                                value={formData.tradername}
                                onChange={handleInputChange}
                                className="enquiry-control"
                            >
                                <option value="">Select Traders name</option>
                                <option value="Trader1">Trader 1</option>
                                <option value="Trader2">Trader 2</option>
                                {/* Add more options as needed */}
                            </select>
                            {errors.tradername && (
                                <div className="text-danger">{errors.tradername}</div>
                            )}
                        </div>
                    </div>

                    <div className="col-md-4">
                        <label className="enquiry-label">
                            Date From:
                        </label>
                        <div className='enquiry-group'>
                            <input
                                type="Date"
                                id="datefrom"
                                name='datefrom'
                                value={formData.datefrom}
                                onChange={handleInputChange}
                                className="enquiry-control"
                                placeholder='Enter Date from'
                            />
                            {errors.datefrom && (
                                <div className="text-danger">{errors.datefrom}</div>
                            )}
                        </div>
                    </div></div>
                <div className='row'>
                    <div className="col-md-4">
                        <label className="enquiry-label">
                            Date To:
                        </label>
                        <div className='enquiry-group'>
                            <input
                                type="date"
                                id="dateto"
                                name='dateto'
                                value={formData.dateto}
                                onChange={handleInputChange}
                                className="enquiry-control"
                                placeholder='Enter Date To'
                            />
                            {errors.dateto && (
                                <div className="text-danger">{errors.dateto}</div>
                            )}
                        </div>
                    </div>

                    <div className="col-md-4">
                        <label className="enquiry-label">
                            Fabric Quality:
                        </label>
                        <div className='enquiry-group'>
                            <input
                                type="text"
                                id="fabricquality"
                                name='fabricquality'
                                value={formData.fabricquality}
                                onChange={handleInputChange}
                                className="enquiry-control"
                                placeholder='Enter Fabric quality'
                            />
                            {errors.fabricquality && (
                                <div className="text-danger">{errors.fabricquality}</div>
                            )}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label className="enquiry-label">
                            Total Fabric Length:
                        </label>
                        <div className='input-group'>

                            <input
                                type="text"
                                id="totalfabriclength"
                                name='totalfabriclength'
                                value={formData.totalfabriclength}
                                onChange={handleInputChange}
                                className="form-control"
                                placeholder='Enter fabric length'
                            />
                            <div className="input-group-append">
                                <span className="input-group-text">Meter</span>
                            </div>

                            {errors.totalfabriclength && (
                                <div className="text-danger">{errors.totalfabriclength}</div>
                            )}
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-4">
                        <label className="enquiry-label">
                            Dalal/Agent Name:
                        </label>
                        <div className='enquiry-group'>
                            <input
                                type="text"
                                id="agent"
                                name='agent'
                                value={formData.agent}
                                onChange={handleInputChange}
                                className="enquiry-control"
                                placeholder="Enter Dalal/Agent"
                            />

                            {errors.agent && (
                                <div className="text-danger">{errors.agent}</div>
                            )}
                        </div>
                    </div>


                    <div className="col-md-4">
                        <label className="enquiry-label">
                            Machine Type:
                        </label>
                        <div className='enquiry-group'>
                            <select
                                id="machinetype"
                                name='machinetype'
                                value={formData.machinetype}
                                onChange={handleInputChange}
                                className="enquiry-control"
                            >
                                <option value="machinetype">Select Machine Type</option>
                                <option value="airjet">Airjet</option>
                                <option value="rapier">Rapier</option>
                                <option value="projectile"> Projectile</option>
                                <option value="shuttleloom">Shuttle Loom</option>
                                <option value="samplingloom">Sampling Loom</option>
                                {/* Add more options as needed */}
                            </select>
                            {errors.machinetype && (
                                <div className="text-danger">{errors.machinetype}</div>
                            )}
                        </div>
                    </div>



                    <div className="col-md-4">
                        <label className="enquiry-label">
                            Width:
                        </label>
                        <div className='enquiry-group'>
                            <input
                                type="number"
                                id="width"
                                name='width'
                                value={formData.width}
                                onChange={handleInputChange}
                                className="enquiry-control"
                                placeholder='Enter Width'
                            />
                            {errors.width && (
                                <div className="text-danger">{errors.width}</div>
                            )}
                        </div>
                    </div>    </div>

                <div className='row'>
                    <div className="col-md-4">
                        <label className="enquiry-label">
                            RPM:
                        </label>
                        <div className='enquiry-group'>
                            <input
                                type="number"
                                id="rpm"
                                name='rpm'
                                value={formData.rpm}
                                onChange={handleInputChange}
                                className="enquiry-control"
                                placeholder='Enter RPM'
                            />
                            {errors.rpm && (
                                <div className="text-danger">{errors.rpm}</div>
                            )}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label className="enquiry-label">
                            Shedding Type:
                        </label>
                        <div className='enquiry-group'>
                            <select
                                type="text"
                                id="sheddingtype"
                                name='sheddingtype'
                                value={formData.sheddingtype}
                                onChange={handleInputChange}
                                className="enquiry-control"
                            >
                                <option value="sheddingtype">Select Shedding type</option>
                                <option value="scam">SCAM</option>
                                <option value="e-shedding">E-Shedding</option>
                                <option value="full-jackquard" > Full Jacquard</option>
                            </select>
                            {errors.sheddingtype && (
                                <div className="text-danger">{errors.sheddingtype}</div>
                            )}
                        </div>
                    </div>



                    <div className="col-md-4">
                        <label className="enquiry-label">
                            No of Frames:
                        </label>
                        <div className='enquiry-group'>
                            <select
                                type="number"
                                id="noofframes"
                                name='noofframes'
                                value={formData.noofframes}
                                onChange={handleInputChange}
                                className="enquiry-control"
                            >
                                <option>Select no of frames</option>
                                <option value="noofframes1">1</option>
                                <option value="noofframes2">2</option>
                                <option value="noofframes3">3</option>
                                <option value="noofframes4">4</option>

                                <option value="noofframes5">5</option>
                                <option value="noofframes6">6</option>
                                <option value="noofframes7">7</option>
                                <option value="noofframes8">8</option>
                                <option value="noofframes9">9</option>
                                <option value="noofframes10">10</option>
                                <option value="noofframes11">11</option>
                                <option value="noofframes12">12</option>
                                <option value="noofframes13">13</option>
                                <option value="noofframes14">14</option>
                                <option value="noofframes15">15</option>
                                <option value="noofframes16">16</option>
                                <option value="noofframes17">17</option>
                                <option value="noofframes18">18</option>
                                <option value="noofframes19">19</option>
                                <option value="noofframes20">20</option>
                                <option value="noofframes21">21</option>
                                <option value="noofframes22">22</option>
                                <option value="noofframes23">23</option>
                                <option value="noofframes24">24</option>
                                <option value="noofframes25">25</option>
                                <option value="noofframes26">26</option>
                                <option value="noofframes27">27</option>
                                <option value="noofframes28">28</option>
                                <option value="noofframes29">29</option>
                                <option value="noofframes30">30</option>
                            </select>
                            {errors.noofframes && (
                                <div className="text-danger">{errors.noofframes}</div>
                            )}
                        </div>
                    </div>    </div>

                <div className='row'>
                    <div className="col-md-4">
                        <label className="enquiry-label">
                            No. of feeders:
                        </label>
                        <div className='enquiry-group'>
                            <select
                                type="number"
                                id="nooffeeders"
                                name='nooffeeders'
                                value={formData.nooffeeders}
                                onChange={handleInputChange}
                                className="enquiry-control"
                                placeholder='Enter No of feeders'
                            >
                                <option>Select no of feeders</option>
                                <option value="nooffeeders1">1</option>
                                <option value="nooffeeders2"> 2</option>
                                <option value="nooffeeders3">3</option>
                                <option value="nooffeeders4"> 4</option>
                                <option value="nooffeeders5">5</option>
                                <option value="nooffeeders6"> 6</option>
                                <option value="nooffeeders7">7</option>
                                <option value="nooffeeders8"> 8</option>
                            </select>
                            {errors.nooffeeders && (
                                <div className="text-danger">{errors.nooffeeders}</div>
                            )}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label className="enq-check-label">
                            Selvadge Jacquard:
                        </label>
                        <div className='enq-check-group'>
                            <input
                                type="checkbox"
                                id="selvadgejacquard"
                                name='selvadgejacquard'
                                value={formData.selvadgejacquard}
                                onChange={handleCheckbox}
                                className="enq-check-control"
                                placeholder='Enter Selvadge jacquard'
                            />Yes
                            {errors.selvadgejacquard && (
                                <div className="text-danger">{errors.selvadgejacquard}</div>
                            )}
                        </div>
                    </div>




                    <div className="col-md-4">
                        <label className="enq-check-label">
                            Top beam:
                        </label>
                        <div className='enq-check-group'>
                            <input
                                type="checkbox"
                                id="topbeam"
                                name='topbeam'
                                value={formData.topbeam}
                                onChange={handleCheckbox}
                                className="enq-check-control"
                                placeholder='Enter Top beam'
                            /> Yes
                            {errors.topbeam && (
                                <div className="text-danger">{errors.topbeam}</div>
                            )}
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className="col-md-4">
                        <label className="enq-check-label">
                            Cramming:
                        </label>
                        <div className='enq-check-group'>
                            <input
                                type="checkbox"
                                id="cramming"
                                name='cramming'
                                value={formData.cramming}
                                onChange={handleCheckbox}
                                className="enq-check-control"
                                placeholder='Enter Cramming'
                            />Yes
                            {errors.cramming && (
                                <div className="text-danger">{errors.cramming}</div>
                            )}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label className="enquiry-label">
                            Leno Design Equipment:
                        </label>
                        <div className='enquiry-group'>
                            <input
                                type="text"
                                id="lenodesignequipment"
                                name='lenodesignequipment'
                                value={formData.lenodesignequipment}
                                onChange={handleInputChange}
                                className="enquiry-control"
                                placeholder='Enter Leno design equipment'
                            />
                            {errors.lenodesignequipment && (
                                <div className="text-danger">{errors.lenodesignequipment}</div>
                            )}
                        </div>
                    </div>

                </div>


                {/* Loom Availability Check */}
                <div className='job-available-block'>
                    <div className="job-availability-info">
                        <label>Check Loom Availability:</label>
                        <div>
                            <label htmlFor="fromdate">From Date:</label>
                            <input type='date' placeholder='Enter from date' id='availablefromdate' name='availablefromdate' onChange={handleAvailabilityInputChange} value={availabilityFormData.availablefromdate} />
                        </div>
                        <div>
                            <label htmlFor="fromdate">To Date:</label>
                            <input type='date' placeholder='Enter to date' id='availabletodate' name='availabletodate' onChange={handleAvailabilityInputChange} value={availabilityFormData.availabletodate} />
                        </div>

                        {/* Display available loom numbers */}
                        <div>
                            <button type='button' className='btn btn-primary'>Check Loom Availability</button>
                        </div>
                    </div>
                </div>





                {/* <div className="col-md-4">
                        <label className="enquiry-label">
                            Available Loom Dates:
                        </label>
                        <div className='enquiry-group'>
                            <input
                                type="date"
                                id="availableloomdates"
                                name='availableloomdates'
                                value={formData.availableloomdates}
                                onChange={handleInputChange}
                                className="enquiry-control"
                                placeholder='Enter available loom dates'
                            />
                            {errors.availableloomdates && (
                                <div className="text-danger">{errors.availableloomdates}</div>
                            )}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label className="enquiry-label">
                            Number of Looms to Assign:
                        </label>
                        <div className='enquiry-group'>
                            <input
                                type="number"
                                id="noofloomstoassign"
                                name='noofloomstoassign'
                                value={formData.noofloomstoassign}
                                onChange={handleInputChange}
                                className="enquiry-control"
                                placeholder='Enter no of looms to assign '
                            />
                            {errors.noofloomstoassign && (
                                <div className="text-danger">{errors.noofloomstoassign}</div>
                            )}
                        </div>
                    </div> */}
                <div className='row'>
                    <div className="col-md-4">
                        <label className="enquiry-label">
                            Number of Looms Possible to Assign:
                        </label>
                        <div className='enquiry-group'>
                            <input
                                type="number"
                                id="noofloomstoassign"
                                name='noofloomstoassign'
                                value={formData.noofloomstoassign}
                                onChange={handleInputChange}
                                className="enquiry-control"
                                placeholder='Enter no of looms possible to assign '
                            />
                            {errors.noofloomstoassign && (
                                <div className="text-danger">{errors.noofloomstoassign}</div>
                            )}
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-md-4">
                            <label className="enquiry-label">
                                Job Rate Offered:
                            </label>

                            <div className="input-group"> {/* Wrap input and "Paisa" text in an input-group */}
                                <input
                                    type="text"
                                    id="jobrateoffered"
                                    name='jobrateoffered'
                                    value={formData.jobrateoffered}
                                    onChange={handleInputChange}
                                    className="form-control"
                                    placeholder='Enter Job rate offered'
                                />
                                <div className="input-group-append"> {/* Append "Paisa" text */}
                                    <span className="input-group-text">Paisa</span>
                                </div>
                            </div>
                            {errors.jobrateoffered && (
                                <div className="text-danger">{errors.jobrateoffered}</div>
                            )}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label className="enquiry-label">
                            Send Counter Offer:
                        </label>

                        <div className="input-group"> {/* Wrap input and "Paisa" text in an input-group */}
                            <input
                                type="text"
                                id="sendcounteroffer"
                                name='sendcounteroffer'
                                value={formData.sendcounteroffer}
                                onChange={handleInputChange}
                                className="form-control"
                                placeholder='Enter Send counter offer'
                            />
                            <div className="input-group-append"> {/* Append "Paisa" text */}
                                <span className="input-group-text">Paisa</span>
                            </div>
                        </div>
                        {errors.sendcounteroffer && (
                            <div className="text-danger">{errors.sendcounteroffer}</div>
                        )}
                    </div>
                </div>













                <br />
                <div className="row mt-4">
                    <div className="col-md-6">
                        <Button variant="primary" onClick={handleSubmit}>Submit</Button>
                    </div>
                    <div className="col-md-6">
                        <Button variant="danger" onClick={handleNotInterested}>Not Interested</Button>
                    </div>
                </div>
            </form >
        </>

    )
}
export default Enquiry