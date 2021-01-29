import React from "react";
import stl from "./Messenger.module.css";

import DialogsItems from "./Dialogs/Dialogs";
import DialogsMessages from "./Messages/Messages";

const Dialogs = (props) => {
    return (
        <div className={stl.content}>
            <DialogsItems DialogsData={props.state.dialogsData} />
            <DialogsMessages MessagesData={props.state.messagesData} />
        </div>
    );
}
export default Dialogs;