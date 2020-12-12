import React from "react";
import stl from "./DialogsPostsItem.module.css";

const DialogsPostsItem = (props) => {
    return (
        <div className={stl.postItemBlock}>
            <div className={stl.avaBlock}>
                <img className={stl.avaImg} src="https://html5css.ru/howto/img_avatar.png" alt=""/>
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
            </div>
        </div>
    );
}

export default DialogsPostsItem;