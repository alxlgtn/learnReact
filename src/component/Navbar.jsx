import {Component} from "react";
import "./Navbar.css";

const Navbar = () => {
    return <nav className="nav">
        <a className="navItem" href="#">home</a>
        <a className="navItem" href="#">about</a>
        <a className="navItem" href="#">bio</a>
        <a className="navItem" href="#">portfolio</a>
        <a className="navItem" href="#">contacts</a>
    </nav>
}

export default Navbar