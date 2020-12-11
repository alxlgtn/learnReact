import React from "react";
import stl from "./Galery.module.css";

import GaleryItem from "./GaleryItem/GaleryItem";

const Galery = () => {
    return (
        <div className={stl.galeryBlock}>
            <GaleryItem />
            <GaleryItem />
            <GaleryItem />
            <GaleryItem />
        </div>
    );
}

export default Galery;