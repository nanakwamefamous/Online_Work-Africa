import React from "react";
import { Outlet, Link} from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../images/logo.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


export default function  Navbar() { 
  useEffect(() => {
    Aos.init({
      duration: 3000,
    });
  }, []);
return (
  <>
    <nav data-aos="fade-right"className="Navbar">
      <img src={logo} alt=""/>
        <ul className="nav_list">
          <li>
            <Link to="/" className="link-style">Home</Link>
          </li>
          <li>
            <Link to="/About us"  className="link-style">About us</Link>
          </li>
          <li>
            <Link to="/Sponsors"  className="link-style">Sponsors</Link>
          </li>
          <li>
            <Link to="/Trainers"  className="link-style">Trainers</Link>
          </li>
          <li>
            <Link to="/Blog"  className="link-style">Blog</Link>
          </li>
          <li>
            <Link to="/Contact"  className="link-style">Contact</Link>
          </li>
        </ul>
        <a href="https://mobilewebghana.org/" className="RegisterNow">Register Now</a>

      </nav>
      <Outlet />
    </>
  )
}
