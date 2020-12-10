import React from "react";
import stl from "./PersonAva.module.css";

const PersonAva = () => {
    return (
        <div className={stl.personAvaBlock}>
            <a href="./">
                <img className={stl.ava} src="https://html5css.ru/howto/img_avatar.png" alt=""/>
            </a>
            <p>Alxlgtn</p>
        </div>
    );
}

export default PersonAva;