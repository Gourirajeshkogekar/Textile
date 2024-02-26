import React, { useState } from 'react';

function Loomowner() {
    const [formData, setFormData] = useState({
        AppUserId: '',
        Name: '',
        OwnerName: '',
        Address: '',
        City: '',
        State: '',
        Country: '',
        Pincode: '',
        GSTNumber: '',
        RegistrationNumber: '',
        PrimaryContact: ''
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form>
            {/* Email input */}

            <div className="col md-6">
                <label className="form-label" htmlFor='AppUserId'>
                    Email address
                </label>
                <input
                    type="email"
                    id="AppUserId"
                    name='AppUserId'
                    value={formData.AppUserId}
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder='Enter email address'
                    required={true}
                />
                {errors.AppUserId && <div className="text-danger">{errors.AppUserId}</div>}
            </div>


            <div className="text-center pt-1 mb-5 pb-1">
                <button className="btn btn-primary fa-sm gradient-custom-2 mb-3" type="submit" onClick={handleSubmit}>Submit</button>
            </div>
        </form>
    );
}

export default Loomowner;
