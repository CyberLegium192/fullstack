import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'; 
import './App.css'

import Headers from "./component/headers/headers.jsx"
import Navbar from "./component/navbar/navbar.jsx"
import Login from "./pages/loginPage/login.jsx"
import Profile from "./pages/profilePage/profile.jsx"
import Register from "./pages/registerPage/register.jsx"
function App() {

  return (
    <div className='noval'>
    <Router>
      <Headers />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Navbar />
    </Router>
    </div>
  )
}

export default App
