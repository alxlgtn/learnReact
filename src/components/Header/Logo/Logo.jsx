import React from "react";
import stl from "./Logo.module.css";

const Logo = () => {
    return (
        <div className={stl.logoBlock}>
            <img className={stl.logoImg} src="https://s.svgbox.net/files.svg?ic=reactjs" alt=""/>
            <p className={stl.logoName}>ReactApp</p>
        </div>
    );
}

export default Logo;