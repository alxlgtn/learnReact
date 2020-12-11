import React from "react";
import stl from "../Navbar.module.css";

const NavItem = () => {
    return (
        <a className={stl.item} href="./">
            <div><img className={stl.navImg} src="https://s.svgbox.net/hero-solid.svg?ic=hashtag" alt=""/></div>
            <div>navItem</div>
        </a>
    );
}

export default NavItem;

// <img src="https://s.svgbox.net/hero-solid.svg?ic=hand&fill=000" width="32" height="32">