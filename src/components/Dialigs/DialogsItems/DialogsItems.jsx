import React from "react";
import stl from "./DialogsItems.module.css"
import DialogItem from "./DialogItem/DialogItem";

const DialogsItems = (props) => {
    let dialogsElement
        = props.DialogsData.map( dlg =>
        <DialogItem
            id={dlg.id}
            name={dlg.name}
            imageLink={dlg.imageLink}
            imageAltText={dlg.imageAltText}
        /> );
    return (
        <div className={stl.dialogsItems}>
            {dialogsElement}
        </div>
    );
}

export default DialogsItems;