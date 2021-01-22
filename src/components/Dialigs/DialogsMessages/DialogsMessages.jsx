import React from "react";
import stl from "./DialogsMessages.module.css"
// import MessageItem from "./MessageItem/MessageItem";

const DialogsMessages = (props) => {
    let massagesElements = props.MessagesData.map(m => <MessageItem avaImage={m.avaImage} messageText={m.messageText}/>);
    return (
        <div className={stl.dialogsMessages}>
            { massagesElements }
        </div>
    );
}

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

export default DialogsMessages;