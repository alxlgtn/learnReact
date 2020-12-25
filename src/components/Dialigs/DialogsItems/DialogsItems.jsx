import React from "react";
import stl from "./DialogsItems.module.css"
import DialogItem from "./DialogItem/DialogItem";

const DialogsItems = (props) => {
    let dialogsElement
        = props.DialogsData.map( d =>
        <DialogItem
            id={d.id}
            name={d.name}
            imageLink={d.imageLink}
            imageAltText={d.imageAltText}
        /> );
    return (
        <div className={stl.dialogsItems}>
            {dialogsElement}
        </div>
    );
}

export default DialogsItems;