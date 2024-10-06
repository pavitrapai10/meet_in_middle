## Overview
Meet in the Middle is a location-based app designed to help users organize meetings and find locations convenient for all attendees. The app dynamically suggests midpoint locations such as restaurants and cafes based on the real-time locations of participants.

The project was developed as part of my capstone project for Fynd Academy, using React for the frontend and Node.js for the backend. The application integrates Google Maps API for displaying a map component with markers and Google Places API to suggest meeting locations. Additionally, OTP-based user authentication is implemented using Twilio.


Features
OTP-Based Authentication: Secure user login and registration using OTP verification via Twilio.
Meeting Creation: Organize meetings, set titles, descriptions, dates, and times.
Invitation System: Send meeting invitations via SMS, allowing users to accept or decline.
Real-Time Location Fetching: Dynamically retrieve users' locations when joining a meeting.
Location Suggestions: Suggest nearby places like cafes, restaurants, etc., based on the average location of all attendees.

Getting Started
Prerequisites
To run the project locally, you'll need the following:

Node.js
npm or yarn
Twilio account for SMS OTP functionality
Google Cloud API key for Maps and Places APIs

