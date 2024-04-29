import React from "react";
import "./Navbar.css";
import logo from "../Resources/cheap_fly.png";

function Navbar() {
    return (
        <nav className="navbar fixed-top" style={{ backgroundColor: 'rgba(123, 120, 153, 0.73)', width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div className="container-fluid" style={{ display: "flex", alignItems: "center" }}>
                <a className="navbar-brand" href="/"><img src={logo} alt="imagen" style={{ height: "100px", width: "100px" }} /></a>
            </div>
        </nav>
    );
}

export default Navbar;
