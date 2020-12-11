import React from "react";
import stl from "./PersonAva.module.css";

const PersonAva = () => {
    return (
        <div className={stl.personAvaBlock}>
            <a className={stl.item} href="./">
                <img className={stl.ava} src="https://html5css.ru/howto/img_avatar.png" alt=""/>
            </a>
            <p className={stl.item}>Alxlgtn</p>
        </div>
    );
}

export default PersonAva;