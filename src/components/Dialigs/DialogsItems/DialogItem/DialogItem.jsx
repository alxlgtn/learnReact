import React from "react";
import stl from "./../DialogsItems.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "../dialogs/" + props.id;
    return (
        <NavLink className={stl.item} to={path} activeClassName={stl.active}>
            <img src={props.imageLink} alt={props.imageAltText} className={stl.itemAvaImage}/>
            <div>{props.name}</div>
        </NavLink>
    );
}
export default DialogItem;