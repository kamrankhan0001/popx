
import './App.css';
import React from "react";
import "./App.js";
import Home from "./components/home/Home.js";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/signup/Signup.js";
import Signin from "./components/signin/Signin.js";
import Profile from "./components/profile/profile.js";

function App() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sign-up" element={<Signup />} />
                <Route path="/sign-in" element={<Signin />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </main>
    );
}

export default App;