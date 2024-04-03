import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"; // Import CSS file

function Home() {
    const navigate = useNavigate();
    return (
        <section className="home-container">
            <div className="home-card">
                {/* Welcome heading */}
                <h1 className="home-heading">Welcome to PopX</h1>

                {/* Small app description */}
                <p className="home-description">
                    Lorem ipsum dolor sit amet, <br /> consectetur adipiscing
                    elit,
                </p>

                {/* Create & login button container */}
                <div className="home-button-container">
                    {/* Go to Create account page button */}
                    <button
                        onClick={() => navigate('/sign-up')}
                        className="home-button home-button-create"
                    >
                        Create Account
                    </button>

                    {/* Go to Login page button */}
                    <button
                        onClick={() => navigate('/sign-in')}
                        className="home-button home-button-login"
                    >
                        Already Registered? Login
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Home;
