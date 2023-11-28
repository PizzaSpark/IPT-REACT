import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { Home, Login, PersonAdd } from "@mui/icons-material";

function Sidebar() {
    return (
        <div className="main">
            <div className="sidebar">

                <h2>
                  Mayahee
                </h2>
                <Link to="/">
                    <div className="sidebar-content">
                        <Home style={{ marginRight: "10px" }} />
                        <h4>
                            <center>Home</center>
                        </h4>
                    </div>
                </Link>

                <Link to="/loginmat">
                    <div className="sidebar-content">
                        <Login style={{ marginRight: "10px" }} />
                        <h4>
                            <center>Login Material</center>
                        </h4>
                    </div>
                </Link>

                <Link to="/login">
                    <div className="sidebar-content">
                        <Login style={{ marginRight: "10px" }} />
                        <h4>
                            <center>Login</center>
                        </h4>
                    </div>
                </Link>

                <Link to="/register">
                    <div className="sidebar-content">
                        <PersonAdd style={{ marginRight: "10px" }} />
                        <h4>
                            <center>Register</center>
                        </h4>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Sidebar;
