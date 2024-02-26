import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import welcomeImage from './textile.jpg';

function SignIn({ handleAuthentication }) {

    const [formData, setFormData] = useState({
        AppUserId: '', Password: ''
    });
    const [errors, setErrors] = useState('');

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }




    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic form validation
        const errors = {};
        if (!formData.AppUserId.trim()) {
            errors.AppUserId = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.AppUserId)) {
            errors.AppUserId = 'Email is invalid';
        }
        if (!formData.Password.trim()) {
            errors.Password = 'Password is required';
        } else if (formData.Password.length < 6) {
            errors.Password = 'Password should be at least 6 characters long';
        }
        const isAuthenticated = true;
        if (isAuthenticated) {
            // Update the authentication state in the parent component
            handleAuthentication(true);
            // Redirect the user to the desired page (e.g., Sidebar)
            navigate('/home');
        } else {
            // If there are errors, update the state to show errors in the form
            setErrors(errors);
        }
    };


    const handleRegister = (e) => {
        e.preventDefault();
        navigate('/register');
    }


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
                                        {/* Email input */}
                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="form3Example1">
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
                                        {/* Password input */}
                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="form3Example4">
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
                                                required={true}
                                            />
                                            {errors.Password && <div className="text-danger">{errors.Password}</div>}
                                        </div>

                                        <div className="text-center pt-1 mb-5 pb-1">
                                            <button className="btn btn-primary btn-block fa-sm gradient-custom-2 mb-3" type="button" onClick={handleSubmit}>Log
                                                in</button>

                                        </div>

                                        <div className="d-flex align-items-center justify-content-center pb-4">
                                            <p className="mb-0 me-2">Don't have an account?</p>
                                            <button type="button" className="btn btn-outline-danger" onClick={handleRegister}>Create New</button>
                                        </div>


                                    </form>
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
export default SignIn