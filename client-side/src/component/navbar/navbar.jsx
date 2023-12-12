import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import HomeIcon from "@mui/icons-material/Home";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const navbar = () => {
    const [value, setValue] = useState("");
    const navigate = useNavigate()
    const location = useLocation();
    
    useEffect(() => {
      const currentPath = location.pathname.substring(1); 
        setValue(currentPath);
    }, [location.pathname])
    
    
    
    
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
        navigate(`/${newValue}`)
    };

    return (
        <div className="w-full fixed bottom-0 p-2 font-poppins Isrespoonsive">
            <BottomNavigation
                value={value}
                onChange={handleChange}
                style={{ background: "#fee2e2", paddingTop: "30px", paddingBottom: "40px", borderRadius: "50px" }}
                
            >
                <BottomNavigationAction
                    label="Beranda"
                    value=""
                    style={{ color: value === "" ? "black" : "#94a3b8" }}
                    icon={
                        <HomeIcon
                            style={{
                                color: value === "" ? "black" : "#94a3b8"
                            }}
                        />
                    }
                />
                <BottomNavigationAction
                    label="Berita"
                    value="news"
                    style={{color: value === "news" ? "black" : "#94a3b8" }}
                    icon={
                        <NewspaperIcon
                            style={{
                                color: value === "news" ? "black" : "#94a3b8"
                            }}
                        />
                    }
                />
                <BottomNavigationAction
                    label="Jadwal"
                    value="schedule"
                    style={{color: value === "schedule" ? "black" : "#94a3b8" }}
                    icon={
                        <CalendarMonthIcon
                            style={{
                                color:
                                    value === "schedule" ? "black" : "#94a3b8"
                            }}
                        />
                    }
                />
                <BottomNavigationAction
                    label="Member"
                    value="member"
                    style={{color: value === "member" ? "black" : "#94a3b8" }}
                    icon={
                        <PeopleAltRoundedIcon
                            style={{
                                color: value === "member" ? "black" : "#94a3b8"
                            }}
                        />
                    }
                />
                <BottomNavigationAction
                    label="Profile"
                    value={"profile" && "login" && "register"}
                    style={{color: value === `${'login' && "profile" && "register"}` ? "black" : "#94a3b8" }}
                    icon={
                        <AccountCircleRoundedIcon
                            style={{color: value === `${'login' && "profile" && "register"}` ? "black" : "#94a3b8" }}
                        />
                    }
                />
            </BottomNavigation>
        </div>
    );
};

export default navbar;
