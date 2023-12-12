import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Headers from "./component/headers/headers.jsx";
import Navbar from "./component/navbar/navbar.jsx";
import HomePage from "./pages/homePage/homePage.jsx";
import NewsPage from "./pages/newsPage/newsPage.jsx";
import SchedulePage from "./pages/schedulePage/schedulePage.jsx";
import MemberPage from "./pages/memberPage/memberPage.jsx";
import Login from "./pages/loginPage/login.jsx";
import Profile from "./pages/profilePage/profile.jsx";
import Register from "./pages/registerPage/register.jsx";
import {useEffect, useState} from 'react'
function App() {
    return (
        <div className="container">
            <Router>
                <Headers />
                <div className="wrapper">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/news" element={<NewsPage />} />
                    <Route path="/schedule" element={<SchedulePage />} />
                    <Route path="/member" element={<MemberPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
                </div>
                <Navbar />
            </Router>
        </div>
    );
}

export default App;
