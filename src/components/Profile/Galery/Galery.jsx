import React from "react";
import stl from "./Galery.module.css";
import GaleryItem from "./GaleryItem/GaleryItem";

const Galery = (props) => {
    let galeryElement
        =props.galeryData.map( g =>
            <GaleryItem id={g.id} /> );
    return (
        <div className={stl.galeryBlock}>
            {galeryElement}
        </div>
    );
}

export default Galery;