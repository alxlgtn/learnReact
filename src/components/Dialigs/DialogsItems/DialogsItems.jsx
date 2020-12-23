import React from "react";
import stl from "./DialogsItems.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <NavLink className={stl.item} to={path} activeClassName={stl.active}>
            <img src={props.imageLink} alt={props.imageAltText} className={stl.itemAvaImage}/>
            <div>{props.name}</div>
        </NavLink>
    );
}

const DialogsItems = () => {
    let DialogsData = [
        {
            id: 1,
            name: 'Alex Lgtn',
            imageLink: 'https://html5css.ru/howto/img_avatar.png',
            imageAltText: 'ava1'
        },
        {
            id: 2,
            name: 'Pevel Legotin',
            imageLink: 'https://html5css.ru/howto/img_avatar.png',
            imageAltText: 'ava2'
        },
        {
            id: 3,
            name: 'Konstantin Ivanov',
            imageLink: 'https://html5css.ru/howto/img_avatar.png',
            imageAltText: 'ava3'
        },
        {
            id: 4,
            name: 'Dasha Lindenau',
            imageLink: 'https://html5css.ru/howto/img_avatar.png',
            imageAltText: 'ava4'
        },
        {
            id: 5,
            name: 'Denis Ignatenko',
            imageLink: 'https://html5css.ru/howto/img_avatar.png',
            imageAltText: 'ava5'
        }

    ]

    return (

        <div className={stl.dialogsItems}>
            <DialogItem
                id = {DialogsData[0].id}
                name = {DialogsData[0].name}
                imageLink = {DialogsData[0].imageLink}
                imageAltText = {DialogsData[0].imageAltText}
            />
           <DialogItem
                id = {DialogsData[1].id}
                name = {DialogsData[1].name}
                imageLink = {DialogsData[1].imageLink}
                imageAltText = {DialogsData[1].imageAltText}
            />
           <DialogItem
                id = {DialogsData[2].id}
                name = {DialogsData[2].name}
                imageLink = {DialogsData[2].imageLink}
                imageAltText = {DialogsData[2].imageAltText}
            />
           <DialogItem
                id = {DialogsData[3].id}
                name = {DialogsData[3].name}
                imageLink = {DialogsData[3].imageLink}
                imageAltText = {DialogsData[3].imageAltText}
            />
           <DialogItem
                id = {DialogsData[4].id}
                name = {DialogsData[4].name}
                imageLink = {DialogsData[4].imageLink}
                imageAltText = {DialogsData[4].imageAltText}
            />
        </div>
    );
}

export default DialogsItems;