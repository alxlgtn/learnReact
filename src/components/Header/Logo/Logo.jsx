import React from "react";
import stl from "./Logo.module.css";

const LogoImg = (props) => {
    return (
        <img className={stl.logoImg} src={props.headerLogoImgLink} alt={props.headerLogoImgAltTxt} />
    );
}

const LogoHeader = (props) => {
    return (
        <p className={stl.logoName}>{props.headerLogoText}</p>
    );
}

const Logo = (props) => {
    let imageLinkBlock = props.headerData.map ( i =>
        <LogoImg 
            headerLogoImgLink={i.headerLogoImgLink}
            headerLogoImgAltTxt={i.headerLogoImgAltTxt}
        /> );

    let logoHeaderBlock = props.headerData.map ( t =>
        <LogoHeader 
            headerLogoText={t.headerLogoText}
        />
    );


    return (
        <div className={stl.logoBlock}>
            {imageLinkBlock}
            {logoHeaderBlock}
        </div>
    );
}

export default Logo;