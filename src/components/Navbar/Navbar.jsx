import React from "react";
import stl from "./Navbar.module.css";

import NavItem from "./NavItem/NavItem";

console.log(stl);

const Navbar = () => {
    return (
        <nav className={stl.nav}>
            <NavItem />
            <NavItem />
            <NavItem />
            <NavItem />
            <NavItem />
            {/*<a className={`${stl.item} ${stl.green}`} href="..">contacts</a>*/}
        </nav>
    );
}

export default Navbar;