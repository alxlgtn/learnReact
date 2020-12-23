import React from "react";
import stl from "./DialogsMessages.module.css"

const MessageImgLeft = (props) => {
    return (
        <div className={stl.messageImgLeft}>
            <img src={props.avaImage} alt="" className={stl.messageAva}/>
            <p className={stl.messageText}>
                {props.messageText}
            </p>
        </div>
    );
}
const MessageImgRight = (props) => {
    return (
        <div className={stl.messageImgRight}>
            <img src={props.avaImage} alt="" className={stl.messageAva}/>
            <p className={stl.messageText}>
                {props.messageText}
            </p>
        </div>
    );
}
const DialogsMessages = () => {
    let MessagesData = [
        {
            id: 1,
            avaImage: 'https://html5css.ru/howto/img_avatar.png',
            messageText: 'В целом, конечно, консультация с широким активом играет определяющее значение'
        },
        {
            id: 2,
            avaImage: 'https://html5css.ru/howto/img_avatar.png',
            messageText: 'Идейные соображения высшего порядка, а также убеждённость некоторых оппонентов предполагает независимые способы реализации позиций'
        },
        {
            id: 3,
            avaImage: 'https://html5css.ru/howto/img_avatar.png',
            messageText: 'Как уже неоднократно упомянуто, реплицированные с зарубежных источников, современные исследования могут быть функционально разнесены на независимые элементы.'
        },
        {
            id: 4,
            avaImage: 'https://html5css.ru/howto/img_avatar.png',
            messageText: 'Учитывая ключевые сценарии поведения, базовый вектор развития не оставляет шанса для поставленных обществом задач.'
        },
        {
            id: 5,
            avaImage: 'https://html5css.ru/howto/img_avatar.png',
            messageText: 'Ok!'
        },

    ]

    return (
        <div className={stl.dialogsMessages}>
            <MessageImgLeft
                id = {MessagesData[0].id}
                avaImage = {MessagesData[0].avaImage}
                messageText = {MessagesData[0].messageText}
            />
            <MessageImgRight
                id = {MessagesData[1].id}
                avaImage = {MessagesData[1].avaImage}
                messageText = {MessagesData[1].messageText}
            />
            <MessageImgLeft
                id = {MessagesData[2].id}
                avaImage = {MessagesData[2].avaImage}
                messageText = {MessagesData[2].messageText}
            />
            <MessageImgRight
                id = {MessagesData[3].id}
                avaImage = {MessagesData[3].avaImage}
                messageText = {MessagesData[3].messageText}
            />
            <MessageImgRight
                id = {MessagesData[4].id}
                avaImage = {MessagesData[4].avaImage}
                messageText = {MessagesData[4].messageText}
            />

        </div>
    );
}

export default DialogsMessages;