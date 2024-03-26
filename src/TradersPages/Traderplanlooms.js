import React, { useState } from 'react';
import '../TradersPages/Traderplanlooms.css';

import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function Planlooms({ onSubmit }) {
    const [formData, setFormData] = useState({
        enquiryno: '', tradername: '', datefrom: ' ', dateto: '', fabricquality: '', totalfabriclength: '', agent: '', loomno: '',
        machinetype: '', width: '', rpm: '', sheddingtype: '', noofframes: '', nooffeeders: '', selvadgejacquard: '', topbeam: '', cramming: '', lenodesignenquipment: '', availableloomdates: '', noofloomsrequired: '', noofloomstoassign: '', jobrateoffered: '', sendcounteroffer: ""
    });

    const [errors, setErrors] = useState('');

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });

    }



    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form validation logic here
        // If form is valid, submit the form data
        // Clear form fields after submission
        console.log(formData); // Example: You can log form data to console
        setFormData({
            enquiryno: '', tradername: '', datefrom: ' ', dateto: '', fabricquality: '', totalfabriclength: '', agent: '', loomno: '',
            machinetype: '', width: '', rpm: '', sheddingtype: '', noofframes: '', nooffeeders: '', selvadgejacquard: '', topbeam: '', cramming: '', lenodesignenquipment: '', availableloomdates: '', noofloomsrequired: '', noofloomstoassign: '', jobrateoffered: '', sendcounteroffer: ""
            // Reset other form fields here
        });


        navigate('/traders/planlooms');

    };



    return (
        <>
            <form className='planloom-form'>



                <div className="row">
                    <div className="col-md-4">
                        <label className="planloom-label">
                            Enquiry No:
                        </label>
                        <div className='planloom-group'>
                            <input
                                type="number"
                                id="enquiryno"
                                name='enquiryno'
                                value={formData.enquiryno}
                                onChange={handleInputChange}
                                className="planloom-control"
                                placeholder='Enter Enquiry no'
                            />
                            {errors.enquiryno && (
                                <div className="text-danger">{errors.enquiryno}</div>
                            )}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label className="planloom-label">
                            Traders Name:
                        </label>
                        <div className='planloom-group'>
                            <select
                                id="tradername"
                                name='tradername'
                                value={formData.tradername}
                                onChange={handleInputChange}
                                className="planloom-control"
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
                        <label className="planloom-label">
                            Date From:
                        </label>
                        <div className='planloom-group'>
                            <input
                                type="Date"
                                id="datefrom"
                                name='datefrom'
                                value={formData.datefrom}
                                onChange={handleInputChange}
                                className="planloom-control"
                                placeholder='Enter Date from'
                            />
                            {errors.datefrom && (
                                <div className="text-danger">{errors.datefrom}</div>
                            )}
                        </div>
                    </div></div>
                <div className='row'>
                    <div className="col-md-4">
                        <label className="planloom-label">
                            Date To:
                        </label>
                        <div className='planloom-group'>
                            <input
                                type="date"
                                id="dateto"
                                name='dateto'
                                value={formData.dateto}
                                onChange={handleInputChange}
                                className="planloom-control"
                                placeholder='Enter Date To'
                            />
                            {errors.dateto && (
                                <div className="text-danger">{errors.dateto}</div>
                            )}
                        </div>
                    </div>

                    <div className="col-md-4">
                        <label className="planloom-label">
                            Fabric Quality:
                        </label>
                        <div className='planloom-group'>
                            <input
                                type="text"
                                id="fabricquality"
                                name='fabricquality'
                                value={formData.fabricquality}
                                onChange={handleInputChange}
                                className="planloom-control"
                                placeholder='Enter Fabric quality'
                            />
                            {errors.fabricquality && (
                                <div className="text-danger">{errors.fabricquality}</div>
                            )}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label className="planloom-label">
                            Total Fabric Length:
                        </label>
                        <div className='planloom-group'>
                            <div className="input-group"> {/* Wrap input and "Paisa" text in an input-group */}
                                <input
                                    type="number"
                                    id="totalfabriclength"
                                    name='totalfabriclength'
                                    value={formData.totalfabriclength}
                                    onChange={handleInputChange}
                                    className="form-control"
                                    placeholder='Enter Total fabric length in meters'
                                />
                                <div className="input-group-append"> {/* Append "Paisa" text */}
                                    <span className="input-group-text">Meter</span>
                                </div>
                            </div>

                            {errors.totalfabriclength && (
                                <div className="text-danger">{errors.totalfabriclength}</div>
                            )}
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-4">
                        <label className="planloom-label">
                            Dalal/Agent Name:
                        </label>
                        <div className='planloom-group'>
                            <input
                                type="text"
                                id="agent"
                                name='agent'
                                value={formData.agent}
                                onChange={handleInputChange}
                                className="planloom-control"
                                placeholder="Enter Dalal/Agent name"
                            />

                            {errors.agent && (
                                <div className="text-danger">{errors.agent}</div>
                            )}
                        </div>
                    </div>


                    <div className="col-md-4">
                        <label className="planloom-label">
                            Machine Type:
                        </label>
                        <div className='planloom-group'>
                            <select
                                id="machinetype"
                                name='machinetype'
                                value={formData.machinetype}
                                onChange={handleInputChange}
                                className="planloom-control"
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
                        <label className="planloom-label">
                            Width:
                        </label>
                        <div className='planloom-group'>
                            <input
                                type="number"
                                id="width"
                                name='width'
                                value={formData.width}
                                onChange={handleInputChange}
                                className="planloom-control"
                                placeholder='Enter Width'
                            />
                            {errors.width && (
                                <div className="text-danger">{errors.width}</div>
                            )}
                        </div>
                    </div></div>


                <div className='row'>
                    <div className="col-md-4">
                        <label className="planloom-label">
                            RPM:
                        </label>
                        <div className='planloom-group'>
                            <input
                                type="number"
                                id="rpm"
                                name='rpm'
                                value={formData.rpm}
                                onChange={handleInputChange}
                                className="planloom-control"
                                placeholder='Enter RPM'
                            />
                            {errors.rpm && (
                                <div className="text-danger">{errors.rpm}</div>
                            )}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label className="planloom-label">
                            Shedding Type:
                        </label>
                        <div className='planloom-group'>
                            <select
                                type="text"
                                id="sheddingtype"
                                name='sheddingtype'
                                value={formData.sheddingtype}
                                onChange={handleInputChange}
                                className="planloom-control"
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
                        <label className="planloom-label">
                            No of Frames:
                        </label>
                        <div className='planloom-group'>
                            <select
                                type="number"
                                id="noofframes"
                                name='noofframes'
                                value={formData.noofframes}
                                onChange={handleInputChange}
                                className="planloom-control"
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
                    </div>
                </div>


                <div className='row'>
                    <div className="col-md-4">
                        <label className="planloom-label">
                            No. of feeders:
                        </label>
                        <div className='planloom-group'>
                            <select
                                type="number"
                                id="nooffeeders"
                                name='nooffeeders'
                                value={formData.nooffeeders}
                                onChange={handleInputChange}
                                className="planloom-control"
                                placeholder='Enter Date To'
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
                                onChange={handleInputChange}
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
                                onChange={handleInputChange}
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
                                onChange={handleInputChange}
                                className="enq-check-control"
                                placeholder='Enter Cramming'
                            />Yes
                            {errors.cramming && (
                                <div className="text-danger">{errors.cramming}</div>
                            )}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label className="planloom-label">
                            Leno Design Equipment:
                        </label>
                        <div className='planloom-group'>
                            <input
                                type="text"
                                id="lenodesignenquipment"
                                name='lenodesignenquipment'
                                value={formData.lenodesignenquipment}
                                onChange={handleInputChange}
                                className="planloom-control"
                                placeholder='Enter Leno design equipment'
                            />
                            {errors.selvadgejacquard && (
                                <div className="text-danger">{errors.lenodesignenquipment}</div>
                            )}
                        </div>
                    </div>





                    <div className="col-md-4">
                        <label className="planloom-label">
                            Available Loom Dates:
                        </label>
                        <div className='planloom-group'>
                            <input
                                type="date"
                                id="availableloomdates"
                                name='availableloomdates'
                                value={formData.availableloomdates}
                                onChange={handleInputChange}
                                className="planloom-control"
                                placeholder='Enter available loom dates'
                            />
                            {errors.availableloomdates && (
                                <div className="text-danger">{errors.availableloomdates}</div>
                            )}
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className="col-md-4">
                        <label className="planloom-label">
                            Number of Looms Possible to Assign:
                        </label>
                        <div className='planloom-group'>
                            <input
                                type="number"
                                id="noofloomstoassign"
                                name='noofloomstoassign'
                                value={formData.noofloomstoassign}
                                onChange={handleInputChange}
                                className="planloom-control"
                                placeholder='Enter no of looms to assign '
                            />
                            {errors.noofloomstoassign && (
                                <div className="text-danger">{errors.noofloomstoassign}</div>
                            )}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label className="planloom-label">
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








                <br />
                <div className="row mt-4">
                    <div className="col-md-6">
                        <Button variant="primary" onClick={handleSubmit} >Submit</Button>
                    </div>

                </div>
            </form >
        </>

    )
}
export default Planlooms;