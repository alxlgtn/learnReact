import React from "react";
import stl from "./Music.module.css";

import MusicBlock from "./MusicBlock/MusicBlock";

const Music = () => {
    return (
        <div className={stl.content}>
            <MusicBlock />
        </div>
    );
}

export default Music;