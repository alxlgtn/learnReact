import React from "react";
import stl from "./Settings.module.css";

import SettingsBlock from "./SettingsBlock/SettingsBlock";

const Settings = () => {
    return (
        <div className={stl.content}>
            <SettingsBlock />
        </div>
    );
}

export default Settings;