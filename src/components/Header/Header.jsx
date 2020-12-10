import React from "react";
import stl from "./Header.module.css";

import Logo from "./Logo/Logo";
import Search from "./Search/Search";
import PersonAva from "./PersonAva/PersonAva";
import Links from "./Links/Links";

const Header = () => {
    return (
        <header className={stl.header}>
            <div className={stl.innerHeader}>
                <Logo />
                <Search />
                <PersonAva />
                <Links />
            </div>
        </header>
    );
}

export default Header;