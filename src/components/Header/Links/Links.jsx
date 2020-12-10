import React from "react";
import stl from "./Links.module.css";

const Links = () => {
    return (
        <div className={stl.linkBlock}>
            <a href="./" className={stl.linkItem}>
                <img className={stl.linkImg} src="https://s.svgbox.net/social.svg?ic=codepen" alt="" />
            </a>
            <a href="./" className={stl.linkItem}>
                <img className={stl.linkImg} src="https://s.svgbox.net/social.svg?ic=github" alt="" />
            </a>
            <a href="./" className={stl.linkItem}>
                <img className={stl.linkImg} src="https://s.svgbox.net/social.svg?ic=myspace" alt="" />
            </a>
            <a href="./" className={stl.linkItem}>
                <img className={stl.linkImg} src="https://s.svgbox.net/social.svg?ic=pinterest" alt="" />
            </a>
            <a href="./" className={stl.linkItem}>
                <img className={stl.linkImg} src="https://s.svgbox.net/social.svg?ic=telegram" alt="" />
            </a>
            <a href="./" className={stl.linkItem}>
                <img className={stl.linkImg} src="https://s.svgbox.net/social.svg?ic=upwork" alt="" />
            </a>
            <a href="./" className={stl.linkItem}>
                <img className={stl.linkImg} src="https://s.svgbox.net/social.svg?ic=youtube" alt="" />
            </a>
        </div>
    );
}

export default Links;