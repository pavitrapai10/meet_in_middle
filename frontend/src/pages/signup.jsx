import React, { useState } from 'react';
import './signup.css';
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [formData, setformData] = useState({ email: "", phoneNumber: "", password: "" });
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setformData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5001/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            if (response.status === 201) {
                alert(data.message);
                navigate('/otpVerification', { state: { email: formData.email } });
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="signup-container">
            <div className="left-section">
                <div className="quote-box">
                    <h1>Meet In the Middle</h1>
                    <span>Join us and connect with others!</span>
                </div>
            </div>
            <div className="right-section">
                <div className="Signup-main">
                    <h2>Signup</h2>
                    <form onSubmit={handleSignup}>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Email"
                            required
                        />
                        <input
                            type="number"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            placeholder="Phone Number"
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            placeholder="Password"
                            required
                        />
                        <button type="Submit">
                            Signup
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;
