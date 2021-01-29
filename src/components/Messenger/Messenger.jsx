import React from "react";
import stl from "./Messenger.module.css";

import DialogsItems from "./Dialogs/Dialogs";
import DialogsMessages from "./Messages/Messages";

const Dialogs = (props) => {
    return (
        <div className={stl.content}>
            <DialogsItems DialogsData={props.DialogsData} />
            <DialogsMessages MessagesData={props.MessagesData} />
        </div>
    );
}
export default Dialogs;