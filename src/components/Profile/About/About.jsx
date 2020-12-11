import React from "react";
import stl from "./About.module.css";


const About = () => {
    return (
        <div className={stl.aboutBlock}>
            <div className={stl.ava}>
                <img src="https://html5css.ru/howto/img_avatar.png" alt=""/>
            </div>
            <div className={stl.info}>
                <h4 className={stl.header}>Alxlgtn</h4>
                <p className={stl.item}>13 april 1976</p>
                <p className={stl.item}>Kemerovo</p>
                <p className={stl.item}>KemGU</p>
                <p className={stl.item}>http://react.kuz</p>
            </div>
        </div>
    );
}

export default About;