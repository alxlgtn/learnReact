import React from "react";
import stl from "./Dialogs.module.css";

import DialogsItems from "./DialogsItems/DialogsItems";
import DialogsMessages from "./DialogsMessages/DialogsMessages";

const Dialogs = (props) => {
    return (
        <div className={stl.content}>
            <DialogsItems DialogsData={props.DialogsData} />
            <DialogsMessages MessagesData={props.MessagesData} />
        </div>
    );
}
export default Dialogs;