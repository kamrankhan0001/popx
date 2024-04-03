import {
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [company, setCompany] = useState("");
    const [isAgency, setIsAgency] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/profile");
    };

    return (
        <section className="flex justify-center h-screen">
            <div className="signup-container">
                <h1 className="signup-heading">
                    Create your <br /> PopX account
                </h1>
                <p className="signup-description">
                    Lorem ipsum dolor sit amet, <br /> consectetur adipiscing
                    elit,
                </p>
                <form
                    action=""
                    className="signup-form"
                    onSubmit={handleSubmit}
                >
                    <div className="flex flex-col gap-3">
                        {/* MUI name input */}
                        <TextField
                            required
                            // id="outlined-required"
                            label="Full Name"
                            placeholder="Enter Full Name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                        {/* MUI phone no. input */}
                        <TextField
                            required
                            // id="outlined-required"
                            label="Phone Number"
                            placeholder="Enter Phone Number"
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />

                        {/* MUI email input */}
                        <TextField
                            required
                            // id="outlined-required"
                            label="Email Address"
                            placeholder="Enter Email Address"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        {/* MUI password input */}
                        <TextField
                            required
                            // id="outlined-required"
                            label="Password"
                            placeholder="Enter Password"
                            type="password"
                            value={pass}
                            onChange={(e) => setPass(e.target.value)}
                        />

                        {/* MUI company name input */}
                        <TextField
                            // id="outlined-required"
                            label="Company Name"
                            placeholder="Enter Company Name"
                            type="text"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                        />

                        {/* MUI Radio Button group for agency confermation */}
                        <div className="signup-radio-group">
                            <FormLabel
                                id="demo-row-radio-buttons-group-label"
                                required
                            >
                                Are you an Agency?
                            </FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                value={isAgency}
                                onChange={(e) => setIsAgency(e.target.value)}
                            >
                                <FormControlLabel
                                    value="Yes"
                                    control={
                                        <Radio name="row-radio-buttons-group" />
                                    }
                                    label="Yes"
                                />
                                <FormControlLabel
                                    value="No"
                                    control={
                                        <Radio name="row-radio-buttons-group" />
                                    }
                                    label="No"
                                />
                            </RadioGroup>
                        </div>
                    </div>

                    {/* Create account button */}
                    <button
                        type="submit"
                        className="signup-button"
                    >
                        Create Account
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Signup;