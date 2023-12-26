import "./index.css";
import {useEffect, useRef, useState} from 'react'
import Logo from "../../assets/photo/logo.png";
// import { NavLink } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="nav-bar">
        {/* <img alt="top-pic" className="logo" src={Logo}></img> */}
      <nav className="navShift">
        <ul>
          <li>
            <a href="/" >Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
