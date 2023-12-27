import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import "./App.css";
import axios from 'axios'

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
  axios.defaults.withCredentials = true
  // useEffect(() => {
  //   axios.get("http://localhost:3000/api/v1/user/profileUser")
  // }, [])
  
  
    return (
        <div className="container">
            <Router>
                <div className="wrapper">
                <Headers />
                <Routes>
                    <Route path="/" element={<Navigate to="/beranda" />} />
                    <Route path="/beranda" element={<HomePage />} />
                    <Route path="/news" element={<NewsPage />} />
                    <Route path="/schedule" element={<SchedulePage />} />
                    <Route path="/member" element={<MemberPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
                <Navbar />
                </div>
            </Router>
        </div>
    );
}

export default App;
