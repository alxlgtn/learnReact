import React from "react";
import stl from "./PostItem.module.css";

const PostItem = (props) => {
    return (
        <div className={stl.postItemBlock}>
            <div className={stl.avaBlock}>
                <img className={stl.avaImg} src={props.avaImg} alt={props.avaImgAlt}/>
                <h4 className={stl.avaName}>
                    {props.usrName}
                </h4>
                <p className={stl.avaPostDate}>
                    {props.postDate}
                </p>
                <p className={stl.avaPostTime}>
                    {props.postTime}
                </p>
            </div>
            <div className={stl.textBlock}>
                <p className={stl.textParagraph}>
                    {props.postText}
                </p>
                <img width="20" src="https://s.svgbox.net/hero-outline.svg?ic=heart" alt=""/>
                {props.postLikeCount}
                <img width="20" src="https://s.svgbox.net/hero-outline.svg?ic=eye" alt=""/>
                {props.postViewsCount}

            </div>
        </div>
    );
}

export default PostItem;