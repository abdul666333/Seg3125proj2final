import Logo from "../assets/logo.png"
import React from "react";
import {Link} from 'react-router-dom';
import "../styles/Navbar.css";
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar(){

    return (
        <div className="navbar">
            <div className="leftSide">
            <div>
            <Link to="/">
                <img src={Logo}/>
            </Link>
            </div>
            </div>
            <div className="rightSide">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact us</Link>
                <Link to="/book">Practice Sessions</Link>
                <Link to="/programs">Programs</Link>
                <Link to="/faq">FAQ</Link>
                <button><ReorderIcon /></button>
            </div>
        </div>
    );
}

export default Navbar;