import React from "react";
import stl from "./Dialogs.module.css";

import DialogsPosts from "./DialogsPosts/DialogsPosts";

const Dialogs = () => {
    return (
        <div className={stl.content}>
            <DialogsPosts />
        </div>
    );
}

export default Dialogs;