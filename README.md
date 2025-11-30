<div align="center">

<!-- Your Logo or Image Here -->

<img src="https://www.google.com/search?q=https://images.unsplash.com/photo-1488459716781-31db52582fe9%3Fq%3D80%26w%3D2070%26auto%3Dformat%26fit%3Dcrop" alt="FoodShare Connect Logo" width="200" style="border-radius: 10px;">

<h1 align="center">FoodShare Connect</h1>

<p align="center">
<b>Reducing Food Waste, One Connection at a Time.</b>
<br />
FoodShare Connect is a full-stack platform that bridges the gap between food donors and recipient organizations, facilitating the efficient distribution of surplus food to those in need.
<br />
<br />
<a href="https://www.google.com/search?q=https://github.com/dhanush290707/FoodFlow"><strong>Explore the docs »</strong></a>
<br />
<br />
<a href="https://www.google.com/search?q=https://dhanush290707.github.io/FoodFlow/">View Live Demo</a>
·
<a href="https://www.google.com/search?q=https://github.com/dhanush290707/FoodFlow/issues">Report Bug</a>
·
<a href="https://www.google.com/search?q=https://github.com/dhanush290707/FoodFlow/issues">Request Feature</a>
</p>
</div>

**Instructions to access the Website:**
1. For Donor Page:
       Email: donor@gmail.com
       Password: 12345
2. For Recipient Page:
       Email: org@gmail.com
       Password: 12345
3. For Admin Page:
       Email: admin1@gmail.com
       Password: 12345
4. For Data Analyst Page:
       Email: analyst@gmail.com
       Password: 12345

🚀 Key Features

Role-Based Access Control: Distinct dashboards for Food Donors, Recipient Organizations, Admins, and Data Analysts.

Real-Time Updates: Instant notifications and dashboard updates using Socket.IO when new listings or requests are made.

Interactive Maps: Visualize donation locations on a map to find nearby food sources easily.

Data Visualization: Analysts can view trends and platform usage statistics via interactive charts.

Secure Authentication: User registration and login with session persistence.

Responsive Design: A modern, clean interface that works seamlessly across devices.

🛠️ Tech Stack

Frontend:

React 18 (Vite)

React Router for navigation

Socket.IO Client for real-time communication

Chart.js & React-Chartjs-2 for analytics

Google Maps API (via @react-google-maps/api) for location services

CSS Modules for custom styling

Backend:

Node.js & Express.js

MongoDB Atlas & Mongoose

Socket.IO for WebSocket connections

bcrypt.js for security

🏗️ Project Structure

/FoodFlow
├── /backend           # Node.js/Express Server
│   ├── .env           # Environment variables (MongoDB URI)
│   ├── server.js      # Main server entry point
│   └── package.json   # Backend dependencies
│
└── /frontend          # React Application
    ├── /src
    │   ├── /components # Reusable UI components (Navbar, Modal, Map, etc.)
    │   ├── /contexts   # Global state management (AuthContext)
    │   ├── /pages      # Main page views (Dashboards, Auth, Landing)
    │   ├── App.jsx     # Main app wrapper
    │   └── Router.jsx  # Route definitions
    ├── package.json    # Frontend dependencies
    └── vite.config.js  # Vite configuration


🏁 Getting Started

Prerequisites

Node.js (v18+)

MongoDB Atlas Account

Google Maps API Key

1. Setup Backend

cd backend
npm install
# Create a .env file and add your MONGO_URI
npm run dev


2. Setup Frontend

cd frontend
npm install
# Create a .env file and add your VITE_GOOGLE_MAPS_API_KEY
npm run dev


Visit http://localhost:5173 to view the app.

🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

Fork the Project

Create your Feature Branch (git checkout -b feature/AmazingFeature)

Commit your Changes (git commit -m 'Add some AmazingFeature')

Push to the Branch (git push origin feature/AmazingFeature)

Open a Pull Request

📝 License

Distributed under the MIT License. See LICENSE for more information.

<div align="center">
Created with ❤️ by <a href="https://www.google.com/search?q=https://github.com/dhanush290707">Dhanush</a>
</div>
