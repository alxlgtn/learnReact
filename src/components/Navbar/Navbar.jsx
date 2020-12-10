import React from "react";
import stl from "./Navbar.module.css";

console.log(stl);

const Navbar = () => {
    return <nav className={stl.nav}>
        <a className={stl.item} href="..">home</a>
        <a className={stl.item} href="..">about</a>
        <a className={stl.item} href="..">bio</a>
        <a className={stl.item} href="..">portfolio</a>
        <a className={`${stl.item} ${stl.green}`} href="..">contacts</a>
    </nav>
}

export default Navbar;