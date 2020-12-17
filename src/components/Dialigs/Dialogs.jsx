import React from "react";
import stl from "./Dialogs.module.css";

import DialogsItems from "./DialogsItems/DialogsItems";
import DialogsMessages from "./DialogsMessages/DialogsMessages";

const Dialogs = () => {
    return (
        <div className={stl.content}>
            <DialogsItems />
            <DialogsMessages />
        </div>
    );
}

export default Dialogs;