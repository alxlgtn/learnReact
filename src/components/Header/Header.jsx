import React from "react";
import stl from "./Header.module.css";

import Logo from "./Logo/Logo";
import Search from "./Search/Search";
import PersonAva from "./PersonAva/PersonAva";
import Links from "./Links/Links";

// Header Data
// let headerLogoData = [
//     {
//         logoHeader: 'ReactApp',
//         imageLink: 'https://s.svgbox.net/files.svg?ic=reactjs',
//         imageAltText: 'logo img alt text'
//     },
// ]

const Header = (props) => {
    return (
        <header className={stl.header}>
            <div className={stl.innerHeader}>
                <Logo headerData={props.headerData} />
                <Search headerData={props.headerData}/>                
                <PersonAva headerData={props.headerData}/>
                <Links headerSocialLinksData={props.headerSocialLinksData}/>
            </div>
        </header>
    );
}

export default Header;