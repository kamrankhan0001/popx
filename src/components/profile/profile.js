import React from "react";
import profile from '../../assets/profile.png'
import camera from '../../assets/camera.png'
import "./profile.css";

function Profile() {
    return (
        <section className="profile-container">
            <div className="profile-card">
                {/* Profile Header */}
                <div className="profile-header">Account Settings</div>

                {/* Profile Data */}
                <div className="profile-data-container">
                    {/* Profile Picture */}
                    <div className="profile-picture-container">
                        <img src={profile} className="profile-picture" alt="" />
                        <img src={camera} className="camera-icon" alt="" />
                    </div>
                    {/* profile name & email */}
                    <div className="name-email">
                        <p className="text-sm font-medium">Marry Doe</p>
                        <p className="text-xs">Marry@Gmail.Com</p>
                    </div>
                </div>
                {/* Profile Bio description */}
                <p className="bio-description">
                    Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed
                    Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna
                    Aliquyam Erat, Sed Diam
                </p>
            </div>
        </section>
    );
}

export default Profile;