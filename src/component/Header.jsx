import React from "react";
import stl from "./Header.module.css";

const Header = () => {
    return <header className={stl.header}>
        <img className={stl.logoImg} src="https://s.svgbox.net/files.svg?ic=reactjs" alt=""/>
        <img className={stl.logoImg} src="https://s.svgbox.net/files.svg?ic=azure-pipelines" alt=""/>
    </header>
}

export default Header;