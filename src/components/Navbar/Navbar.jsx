import React from "react";
import stl from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

// import NavItem from "./NavItem/NavItem";

const Navbar = () => {
    return (
        <nav className={stl.nav}>
            <NavLink className={stl.item} to="/profile" activeClassName={stl.active}>
                <div><img className={stl.navImg} src="https://s.svgbox.net/hero-outline.svg?ic=user-circle" alt=""/></div>
                <div>Profile</div>
            </NavLink>
            <NavLink className={stl.item} to="/messenger" activeClassName={stl.active} >
                <div><img className={stl.navImg} src="https://s.svgbox.net/hero-outline.svg?ic=chat" alt=""/></div>
                <div>Dialogs</div>
            </NavLink>
            <NavLink className={stl.item} to="/news" activeClassName={stl.active}>
                <div><img className={stl.navImg} src="https://s.svgbox.net/hero-outline.svg?ic=document-text" alt=""/></div>
                <div>News</div>
            </NavLink>
            <NavLink className={stl.item} to="/music" activeClassName={stl.active}>
                <div><img className={stl.navImg} src="https://s.svgbox.net/hero-outline.svg?ic=music-note" alt=""/></div>
                <div>Music</div>
            </NavLink>
            <NavLink className={stl.item} to="/settings" activeClassName={stl.active}>
                <div><img className={stl.navImg} src="https://s.svgbox.net/hero-outline.svg?ic=cog" alt=""/></div>
                <div>Settings</div>
            </NavLink>
        </nav>
    );
}

export default Navbar;