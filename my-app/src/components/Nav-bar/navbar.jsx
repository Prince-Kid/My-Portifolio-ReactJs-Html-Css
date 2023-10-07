import React from 'react'
import "./navbar.css"
import { Link } from "react-scroll"
import contact from "../../components/Nav-bar/asset/contact-me-ann-kroeker-writing-coach-small.webp"
const Navbar = () => {
  return (
    <nav className="navbar">
        <h1>Prince</h1>
        <div className="desktopMenu">
        <Link className="desktopMenuListItem">Home</Link>
        <Link className="desktopMenuListItem">About</Link>
        <Link className="desktopMenuListItem">Portifolio</Link>
        <Link className="desktopMenuListItem">Client</Link>
        </div>
        <button class="contact">
            <img src={contact} alt="" class="desktopMenuImg"/>Contact Me
        </button>
    </nav>
  )
}

export default Navbar
