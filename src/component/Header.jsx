import React from "react";
import stl from "./Header.module.css";

const Header = () => {
    return <header className={stl.header}>
        <img className={stl.logoImg} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" alt=""/>
    </header>
}

export default Header;