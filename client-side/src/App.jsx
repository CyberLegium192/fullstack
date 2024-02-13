import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import {useState, useEffect} from 'react'
import "./App.css";
import axios from 'axios'
import 'rsuite/styles/index.less';

import Headers from "./component/headers/headers.jsx";
import Navbar from "./component/navbar/navbar.jsx";
import HomePage from "./pages/homePage/homePage.jsx";
import NewsPage from "./pages/newsPage/newsPage.jsx";
import SchedulePage from "./pages/schedulePage/schedulePage.jsx";
import MemberPage from "./pages/memberPage/memberPage.jsx";
import Login from "./pages/loginPage/login.jsx";
import Profile from "./pages/profilePage/profile.jsx";
import Register from "./pages/registerPage/register.jsx";
import Settings from "./pages/settings/settings.jsx";
import EditBIo from "./pages/editBio/editBio.jsx";

// SONGS
import SongsPage from "./pages/songs/songs.jsx";
import SongsDetails from "./pages/songs/songDetail.jsx";
import SearchSong from "./pages/songs/searchSong.jsx";
import SetlistSong from "./pages/songs/setlistSong.jsx";

// ================== SINGGLE PAGE  =========================
import DetailMember from "./pages/memberPage/detailMember.jsx";
import DetailSchedule from "./pages/schedulePage/detailSchedule.jsx";



// =============== COMPONENT FOR ADMIN ======================
// NEWS COMPONENT
import PostSchedule from './pages/admin/schedule/postSchedule.jsx'
import EditSchedule from './pages/admin/schedule/editSchedule.jsx'
// NEWS COMPONENT
import PostNews from './pages/admin/news/postNews.jsx'
import EditNews from './pages/admin/news/editPost.jsx'




function App() {
    const [user, setUser] = useState('');
    const [isActive, setIsActive] = useState(false);
    const admin = import.meta.env.VITE_ADMIN_ROLE
  
  useEffect(() => {
    const user = localStorage.getItem('user')
    setUser(user)
    // authToken()
    if (user == admin) {
      setIsActive(true)
    } else{
      setIsActive(false)
    }
  }, [user])
  
  
  
  
    return (
        <div className="container">
            <Router>
                <div className="wrapper">
                <Headers />
                <Routes>
                    <Route path="/" element={<Navigate to="/beranda" />} />
                    <Route path="/beranda" element={<HomePage />} />
                    <Route path="/lagu" element={<SongsPage  />} />
                    <Route path="/lagu/:title" element={<SongsDetails  />} />
                    <Route path="/lagu/album" element={<SearchSong  />} />
                    <Route path="/lagu/album/:setlist" element={<SetlistSong  />} />
                    
                    
                    
                    
                    
                    <Route path="/news" element={<NewsPage isActive={isActive} />} />
                    <Route path="/schedule" element={<SchedulePage isActive={isActive} />} />
                    <Route path="/detail/schedule/:id" element={<DetailSchedule />} />
                    <Route path="/member" element={<MemberPage />} />
                    <Route path="/member/:id" element={<DetailMember />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/profile/settings" element={<Settings />} />
                    <Route path="/profile/edit/user/:id" element={<EditBIo />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/profile" element={<Profile />} />
                    
                    
                    
                    
                    
                    {/*ADMIN ROUTE*/}
                    <Route path="/admin/post/schedule" element={<PostSchedule />} />
                    <Route path="/admin/edit/schedule/:id" element={<EditSchedule />} />
                    <Route path="/admin/post/news" element={<PostNews />} />
                    <Route path="/admin/edit/news/:id" element={<EditNews />} />
                    
                </Routes>
                <Navbar />
                </div>
                
            </Router>
        </div>
    );
}

export default App;
