import React from "react";
import stl from "./Dialogs.module.css";

import DialogsItems from "./DialogsItems/DialogsItems";
import DialogsMessages from "./DialogsMessages/DialogsMessages";

const Dialogs = (props) => {
    return (
        <div className={stl.content}>
            <DialogsItems DialogsData={props.state.dialogsData} />
            <DialogsMessages MessagesData={props.state.messagesData} />
        </div>
    );
}
export default Dialogs;