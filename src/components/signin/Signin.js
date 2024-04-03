import { TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signin.css";


function Signin() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    // Form submission handler
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here wiil be write form submission logic
        navigate('/profile');
    }

    return (
        <section className="flex justify-center h-screen">
            <div className="signin-container">
                {/* Page heading */}
                <h1 className="signin-heading">
                    Signin to your <br /> PopX account
                </h1>
                {/* Page description */}
                <p className="signin-description">
                    Lorem ipsum dolor sit amet, <br /> consectetur adipiscing
                    elit,
                </p>

                {/* Login form */}
                <form action="" className="signin-form" onSubmit={handleSubmit} >
                    {/* MUI email input */}
                    <TextField
                        required
                        // id="outlined-required"
                        label="Email Address"
                        placeholder="Enter Email Address"
                        type="email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        className="signin-input"
                    />

                    {/* MUI password input */}
                    <TextField
                        required
                        // id="outlined-required"
                        label="Password"
                        placeholder="Email Password"
                        type="password"
                        value={pass}
                        onChange={(e)=>setPass(e.target.value)}
                        className="signin-input"
                    />

                    {/* Login Button */}
                    <button type="submit"
                        className="signin-button"
                    >
                        Login
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Signin;