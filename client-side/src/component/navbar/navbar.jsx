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
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const currentPath = location.pathname.substring(1);
        if (currentPath.includes("beranda")) {
            setValue("beranda");
        } else if (currentPath.includes("news")) {
            setValue("news");
        } else if (currentPath.includes("schedule")) {
            setValue("schedule");
        } else if (currentPath.includes("member")) {
            setValue("member");
        } else if (currentPath.includes("profile")) {
            setValue("profile");
        } else {
            console.log("halo");
        }
    }, [location.pathname]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        navigate(`/${newValue}`);
    };

    return (
        <div className="w-full sm:w-[600px] fixed bottom-0  font-poppins z-50">
            <div className="w-full p-2 font-poppins ">
                <BottomNavigation
                    value={value}
                    onChange={handleChange}
                    role="navigation"
                    style={{
                        background: "#fee2e2",
                        paddingTop: "30px",
                        paddingBottom: "40px",
                        borderRadius: "50px"
                    }}
                >
                    <BottomNavigationAction
                        label="Beranda"
                        value="beranda"
                        aria-label="Beranda"
                        style={{
                            color: value === "beranda" ? "black" : "#94a3b8"
                        }}
                        icon={
                            <HomeIcon
                                style={{
                                    color:
                                        value === "beranda"
                                            ? "black"
                                            : "#94a3b8"
                                }}
                            />
                        }
                    />
                    <BottomNavigationAction
                        label="Berita"
                        value="news"
                        aria-label="Berita"
                        style={{
                            color: value === "news" ? "black" : "#94a3b8"
                        }}
                        icon={
                            <NewspaperIcon
                                style={{
                                    color:
                                        value === "news" ? "black" : "#94a3b8"
                                }}
                            />
                        }
                    />
                    <BottomNavigationAction
                        label="Jadwal"
                        value="schedule"
                        aria-label="Jadwal"
                        style={{
                            color: value === "schedule" ? "black" : "#94a3b8"
                        }}
                        icon={
                            <CalendarMonthIcon
                                style={{
                                    color:
                                        value === "schedule"
                                            ? "black"
                                            : "#94a3b8"
                                }}
                            />
                        }
                    />
                    <BottomNavigationAction
                        label="Member"
                        value="member"
                        aria-label="Member"
                        style={{
                            color: value === "member" ? "black" : "#94a3b8"
                        }}
                        icon={
                            <PeopleAltRoundedIcon
                                style={{
                                    color:
                                        value === "member" ? "black" : "#94a3b8"
                                }}
                            />
                        }
                    />
                    <BottomNavigationAction
                        label="Profile"
                        value="profile"
                        aria-label="Profile"
                        style={{
                            color: value === `profile` ? "black" : "#94a3b8"
                        }}
                        icon={
                            <AccountCircleRoundedIcon
                                style={{
                                    color:
                                        value === `profile`
                                            ? "black"
                                            : "#94a3b8"
                                }}
                            />
                        }
                    />
                </BottomNavigation>
            </div>
        </div>
    );
};

export default navbar;
