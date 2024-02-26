
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import welcomeImage from './textile.jpg';

function OTP() {


    const location = useLocation();
    const AppUserId = location.state ? location.state.AppUserId : '';

    const [formData, setFormData] = useState({
        otp: ''
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    // const location = useLocation();
    // const email = location.state ? location.state.email : '';

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // Apply validation logic based on the field name
        const truncatedValue = value.replace(/\D/g, '').slice(0, 6); // Limit to 6 characters for OTP
        setFormData({ ...formData, [name]: truncatedValue });
    };






    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://127.0.0.1:3003/verify-otp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                mode: 'cors',
                body: JSON.stringify({ AppUserId: AppUserId, otp: formData.otp }),

            });

            if (!response.ok) {
                throw new Error('Failed to verify OTP');
            }

            const data = await response.json();

            setSuccessMessage(data.message);
            //console.log(email, formData.otp) // Assuming your backend sends a message upon successful verification
            navigate('/login');
        } catch (error) {
            console.error('Error:', error);
            // Handle error
            setErrors({ otp: 'Failed to verify OTP' });
        }
    };
    return (

        <>
            {/* Section: Design Block */}
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
                                    <form>
                                        <div className="text-center" height='30px'>
                                            <img src={welcomeImage} alt="Welcome Image" className="mb-5" /> {/* Use the image here */}
                                        </div>

                                        {/* 2 column grid layout with text inputs for the first and last names */}


                                        <div className="row">

                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <label className='form-label'>OTP:</label>
                                                    <input
                                                        type="number"
                                                        id='otp'
                                                        name="otp"
                                                        value={formData.otp}
                                                        className='form-control'
                                                        onChange={handleInputChange}
                                                        maxLength="6" // Restrict input to 6 characters
                                                    />

                                                </div>

                                            </div>
                                            {errors.otp && (
                                                <div className="text-danger">{errors.otp}</div>
                                            )}
                                        </div>


                                        {/* Submit button */}
                                        <button
                                            type="submit"
                                            className="btn btn-primary  fa-bg mb-4"
                                            onClick={handleSubmit}
                                        >
                                            verify OTP
                                        </button>

                                    </form>
                                    {successMessage && <div className="text-success">{successMessage}</div>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Section: Design Block */}
        </>


    )
}
export default OTP;