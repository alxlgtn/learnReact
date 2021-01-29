import React from "react";
import stl from "./../Messages.module.css"

const MessageItem = (props) => {
    return (
        <div className={stl.messageImgLeft}>
            <img src={props.avaImage} alt="" className={stl.messageAva}/>
            <p className={stl.messageText}>
                {props.messageText}
            </p>
        </div>
    );
}
export default MessageItem;