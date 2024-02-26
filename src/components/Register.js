import React, { useState } from 'react';
import welcomeImage from './textile.jpg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [formData, setFormData] = useState({
        AppUserId: '',
        Name: '',
        Password: '',
        OwnerName: '',
        Address: '',
        City: '',
        State: '',
        Country: '',
        Pincode: '',
        GSTNumber: '',
        RegistrationNumber: '',
        PrimaryContact: '',
    });
    const [errors, setErrors] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = {};
        const nameRegex = /^[a-zA-Z]+$/;
        const emailRegex = /^\S+@\S+\.\S+$/;
        const noNumberRegex = /^[^\d]+$/; // Regex to disallow numbers


        if (!formData.AppUserId.trim()) {
            errors.AppUserId = 'Email is required';
        } else if (!emailRegex.test(formData.AppUserId)) {
            errors.AppUserId = 'Invalid email format';
        }
        if (!formData.Name.trim()) {
            errors.Name = 'Name is required';
        } else if (!nameRegex.test(formData.Name)) {
            errors.Name = 'Name should not contain numbers';
        }
        if (!formData.Password.trim()) {
            errors.Password = 'Password is required';
        } else if (formData.Password.length < 6) {
            errors.Password = 'Password should be at least 6 characters long';
        }
        if (!formData.OwnerName.trim()) {
            errors.OwnerName = 'Owner Name is required';
        } else if (!noNumberRegex.test(formData.OwnerName)) {
            errors.OwnerName = 'Owner Name should not contain numbers';
        }
        if (!formData.Address.trim()) {
            errors.Address = 'Address is required';
        }
        if (!formData.City.trim()) {
            errors.City = 'City is required';
        } else if (!noNumberRegex.test(formData.City)) {
            errors.City = 'City should not contain numbers';
        }

        if (!formData.State.trim()) {
            errors.State = 'State is required';
        } else if (!noNumberRegex.test(formData.State)) {
            errors.State = 'State should not contain numbers';
        }

        if (!formData.Country.trim()) {
            errors.Country = 'Country is required';
        } else if (!noNumberRegex.test(formData.Country)) {
            errors.Country = 'Country should not contain numbers';
        }

        if (!formData.Pincode.trim()) {
            errors.Pincode = 'Pincode is required';
        }
        if (!formData.GSTNumber.trim()) {
            errors.GSTNumber = 'GST Number is required';
        }
        if (!formData.RegistrationNumber.trim()) {
            errors.RegistrationNumber = 'Registration Number is required';
        }
        if (!formData.PrimaryContact.trim()) {
            errors.PrimaryContact = 'Primary Contact is required';
        }

        setErrors(errors);

        if (Object.keys(errors).length === 0) {
            try {
                const otpResponse = await fetch('http://127.0.0.1:3003/request-otp/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    mode: 'cors',
                    body: JSON.stringify(formData)
                });

                if (!otpResponse.ok) {
                    throw new Error('Failed to request otp');
                }

                const response = await axios.post(
                    'https://textileapp.microtechsolutions.co.in/php/postappuser.php',
                    formData,
                    {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        }
                    }
                );

                if (response.status === 200) {
                    setSuccessMessage('User registered successfully');
                    navigate('/otp', { state: { AppUserId: formData.AppUserId } });
                } else {
                    throw new Error('Failed to register user');
                }
            } catch (error) {
                console.error('Error:', error);
                setErrors('Error creating user!');
            }
        }
    };

    return (
        <>
            <section className="background-radial-gradient overflow-hidden">
                <style
                    dangerouslySetInnerHTML={{
                        __html:
                            "\n    .background-radial-gradient {\n      background-color: hsl(218, 41%, 15%);\n      background-image: radial-gradient(650px circle at 0% 0%,\n          hsl(218, 41%, 35%) 15%,\n          hsl(218, 41%, 30%) 35%,\n          hsl(218, 41%, 20%) 75%,\n          hsl(218, 41%, 19%) 80%,\n          transparent 100%),\n        radial-gradient(1250px circle at 100% 100%,\n          hsl(218, 41%, 45%) 15%,\n          hsl(218, 41%, 30%) 35%,\n          hsl(218, 41%, 20%) 75%,\n          hsl(218, 41%, 19%) 80%,\n          transparent 100%);\n    }\n\n    #radius-shape-1 {\n      height: 220px;\n      width: 220px;\n      top: -60px;\n      left: -130px;\n           overflow: hidden;\n    }\n\n    #radius-shape-2 {\n      border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%;\n      bottom: -60px;\n      right: -110px;\n      width: 300px;\n      height: 300px;\n           overflow: hidden;\n    }\n\n    .bg-glass {\n      background-color: hsla(0, 0%, 100%, 0.9) !important;\n      backdrop-filter: saturate(200%) blur(25px);\n    }\n  "
                    }}
                />
                <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
                    <div className="row gx-lg-5 align-items-center mb-5">
                        <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
                            <h1
                                className="my-5 display-5 fw-bold ls-tight"
                                style={{ color: "hsl(218, 81%, 95%)" }}
                            >
                                The best offer <br />
                                <span style={{ color: "hsl(218, 81%, 75%)" }}>
                                    for your business
                                </span>
                            </h1>
                            <p
                                className="mb-4 opacity-70"
                                style={{ color: "hsl(218, 81%, 85%)" }}
                            >
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Temporibus, expedita iusto veniam atque, magni tempora mollitia
                                dolorum consequatur nulla, neque debitis eos reprehenderit quasi ab
                                ipsum nisi dolorem modi. Quos?
                            </p>
                        </div>
                        <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
                            <div
                                id="radius-shape-1"
                                className="position-absolute rounded-circle shadow-5-strong"
                            />
                            <div
                                id="radius-shape-2"
                                className="position-absolute shadow-5-strong"
                            />
                            <div className="card bg-glass">
                                <div className="card-body px-4 py-5 px-md-5">
                                    <form onSubmit={handleSubmit}>
                                        <div className="text-center">
                                            <img src={welcomeImage} alt="Welcome Image" className="mb-5" />
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6">
                                                <label className="form-label">
                                                    Email address
                                                </label>
                                                <div className='form-group'>
                                                    <input
                                                        type="email"
                                                        id="AppUserId"
                                                        name='AppUserId'
                                                        value={formData.AppUserId}
                                                        onChange={handleInputChange}
                                                        className="form-control"
                                                        placeholder='Enter email address'
                                                    />
                                                    {errors.AppUserId && (
                                                        <div className="text-danger">{errors.AppUserId}</div>
                                                    )}
                                                </div>
                                            </div>

                                            <div className='col-md-6'>
                                                <div className="form-group">
                                                    <label className="form-label">
                                                        Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="Name"
                                                        name='Name'
                                                        value={formData.Name}
                                                        onChange={handleInputChange}
                                                        className="form-control"
                                                        placeholder='Enter Name'
                                                    />
                                                    {errors.Name && (
                                                        <div className="text-danger">{errors.Name}</div>
                                                    )}
                                                </div>
                                            </div>

                                            <div className='col-md-6'>
                                                <div className="form-group">
                                                    <label className="form-label">
                                                        Password
                                                    </label>
                                                    <input
                                                        type="password"
                                                        id="Password"
                                                        name='Password'
                                                        value={formData.Password}
                                                        onChange={handleInputChange}
                                                        className="form-control"
                                                        placeholder='Enter Password'
                                                    />
                                                    {errors.Password && (
                                                        <div className="text-danger">{errors.Password}</div>
                                                    )}
                                                </div>
                                            </div>

                                            <div className='col-md-6'>
                                                <div className="form-group">
                                                    <label className="form-label">
                                                        Owner Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="OwnerName"
                                                        name='OwnerName'
                                                        value={formData.OwnerName}
                                                        onChange={handleInputChange}
                                                        className="form-control"
                                                        placeholder='Enter OwnerName'
                                                    />
                                                    {errors.OwnerName && (
                                                        <div className="text-danger">{errors.OwnerName}</div>
                                                    )}
                                                </div>
                                            </div>

                                            <div className='col-md-6'>
                                                <div className="form-group">
                                                    <label className="form-label">
                                                        Address
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="Address"
                                                        name='Address'
                                                        value={formData.Address}
                                                        onChange={handleInputChange}
                                                        className="form-control"
                                                        placeholder='Enter Address'
                                                    />
                                                    {errors.Address && (
                                                        <div className="text-danger">{errors.Address}</div>
                                                    )}
                                                </div>
                                            </div>

                                            <div className='col-md-6'>
                                                <div className="form-group">
                                                    <label className="form-label">
                                                        City
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="City"
                                                        name='City'
                                                        value={formData.City}
                                                        onChange={handleInputChange}
                                                        className="form-control"
                                                        placeholder='Enter City'
                                                    />
                                                    {errors.City && (
                                                        <div className="text-danger">{errors.City}</div>
                                                    )}
                                                </div>
                                            </div>

                                            <div className='col-md-6'>
                                                <div className="form-group">
                                                    <label className="form-label">
                                                        State
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="State"
                                                        name='State'
                                                        value={formData.State}
                                                        onChange={handleInputChange}
                                                        className="form-control"
                                                        placeholder='Enter State'
                                                    />
                                                    {errors.State && (
                                                        <div className="text-danger">{errors.State}</div>
                                                    )}
                                                </div>
                                            </div>

                                            <div className='col-md-6'>
                                                <div className="form-group">
                                                    <label className="form-label">
                                                        Country
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="Country"
                                                        name='Country'
                                                        value={formData.Country}
                                                        onChange={handleInputChange}
                                                        className="form-control"
                                                        placeholder='Enter Country'
                                                    />
                                                    {errors.Country && (
                                                        <div className="text-danger">{errors.Country}</div>
                                                    )}
                                                </div>
                                            </div>

                                            <div className='col-md-6'>
                                                <div className="form-outline mb-4">
                                                    <label className="form-label">
                                                        Pincode
                                                    </label>
                                                    <input
                                                        type="number"
                                                        id="Pincode"
                                                        name='Pincode'
                                                        value={formData.Pincode}
                                                        onChange={handleInputChange}
                                                        className="form-control"
                                                        placeholder='Enter Pincode'
                                                    />
                                                    {errors.Pincode && (
                                                        <div className="text-danger">{errors.Pincode}</div>
                                                    )}
                                                </div>
                                            </div>

                                            <div className='col-md-6'>
                                                <div className="form-group">
                                                    <label className="form-label">
                                                        GST Number
                                                    </label>
                                                    <input
                                                        type="number"
                                                        id="GSTNumber"
                                                        name='GSTNumber'
                                                        value={formData.GSTNumber}
                                                        onChange={handleInputChange}
                                                        className="form-control"
                                                        placeholder='Enter GSTNumber'
                                                    />
                                                    {errors.GSTNumber && (
                                                        <div className="text-danger">{errors.GSTNumber}</div>
                                                    )}
                                                </div>
                                            </div>

                                            <div className='col-md-6'>
                                                <div className="form-outline mb-4">
                                                    <label className="form-label">
                                                        Registration Number
                                                    </label>
                                                    <input
                                                        type="number"
                                                        id="RegistrationNumber"
                                                        name='RegistrationNumber'
                                                        value={formData.RegistrationNumber}
                                                        onChange={handleInputChange}
                                                        className="form-control"
                                                        placeholder='Enter RegistrationNumber'
                                                    />
                                                    {errors.RegistrationNumber && (
                                                        <div className="text-danger">{errors.RegistrationNumber}</div>
                                                    )}
                                                </div>
                                            </div>

                                            <div className='col-md-6'>
                                                <div className="form-group">
                                                    <label className="form-label">
                                                        Primary Contact
                                                    </label>
                                                    <input
                                                        type="number"
                                                        id="PrimaryContact"
                                                        name='PrimaryContact'
                                                        value={formData.PrimaryContact}
                                                        onChange={handleInputChange}
                                                        className="form-control"
                                                        placeholder='Enter PrimaryContact'
                                                    />
                                                    {errors.PrimaryContact && (
                                                        <div className="text-danger">{errors.PrimaryContact}</div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            className="btn btn-primary btn-block fa-sm mb-4 mt-2"
                                            onClick={handleSubmit}
                                        >
                                            Sign up
                                        </button>
                                    </form>
                                    {successMessage && <div className="text-success">{successMessage}</div>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Register;










