import React from "react";
import stl from "./About.module.css";

const Avatar = (props) => {
    return (
        <div className={stl.ava}>
            <img src={props.avatarImg} alt=""/>
        </div>
    );
}

const ProfileInfo = (props) => {
    return (
        <div className={stl.info}>
            <h4 className={stl.header}>{props.nickName}</h4>
            <p className={stl.item}><b>{props.firstName} {props.secondName}</b></p>
            <p className={stl.item}>{props.birthday}</p>
            <p className={stl.item}>{props.city}</p>
            <p className={stl.item}>{props.education}</p>
            <p className={stl.item}>{props.site}</p>
        </div>
    );
}

const About = (props) => {

    let avatarBlock = props.aboutData.map ( av =>
    <Avatar
        avatarImg={av.avatarImg}
    /> );

    let profileInfoBlock = props.aboutData.map ( p =>
    <ProfileInfo
        nickName={p.nickName}
        firstName={p.firstName}
        secondName={p.secondName}
        birthday={p.birthday}
        city={p.city}
        education={p.education}
        site={p.site}

    />);
    
    return (
        <div className={stl.aboutBlock}>
            {avatarBlock}
            {profileInfoBlock}
        </div>
    );
}

export default About;