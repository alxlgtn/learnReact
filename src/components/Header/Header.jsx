import React from "react";
import stl from "./Header.module.css";

import Logo from "./Logo/Logo";
import Search from "./Search/Search";
import PersonAva from "./PersonAva/PersonAva";
import Links from "./Links/Links";

const Header = (props) => {
    return (
        <header className={stl.header}>
            <div className={stl.innerHeader}>
                <Logo headerData={props.state.headerData } />
                <Search headerData={props.state.headerData}/>                
                <PersonAva headerData={props.state.headerData}/>
                <Links headerSocialLinksData={props.state.headerSocialLinksData}/>
            </div>
        </header>
    );
}

export default Header;