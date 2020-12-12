import React from "react";
import stl from "./Navbar.module.css";

// import NavItem from "./NavItem/NavItem";

const Navbar = () => {
    return (
        <nav className={stl.nav}>
            <a className={stl.item} href="/profile">
                <div><img className={stl.navImg} src="https://s.svgbox.net/hero-outline.svg?ic=user-circle" alt=""/></div>
                <div>Profile</div>
            </a>
            <a className={stl.item} href="/dialogs">
                <div><img className={stl.navImg} src="https://s.svgbox.net/hero-outline.svg?ic=chat" alt=""/></div>
                <div>Dialogs</div>
            </a>
            <a className={stl.item} href="/news">
                <div><img className={stl.navImg} src="https://s.svgbox.net/hero-outline.svg?ic=document-text" alt=""/></div>
                <div>News</div>
            </a>
            <a className={stl.item} href="/music">
                <div><img className={stl.navImg} src="https://s.svgbox.net/hero-outline.svg?ic=music-note" alt=""/></div>
                <div>Music</div>
            </a>
            <a className={stl.item} href="/settings">
                <div><img className={stl.navImg} src="https://s.svgbox.net/hero-outline.svg?ic=cog" alt=""/></div>
                <div>Settings</div>
            </a>
            {/*<NavItem />*/}
            {/*<NavItem />*/}
            {/*<NavItem />*/}
            {/*<NavItem />*/}
            {/*<NavItem />*/}
            {/*<a className={`${stl.item} ${stl.green}`} href="..">contacts</a>*/}
        </nav>
    );
}

export default Navbar;