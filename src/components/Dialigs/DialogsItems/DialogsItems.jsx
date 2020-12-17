import React from "react";
import stl from "./DialogsItems.module.css"

const DialogsItems = () => {
    return (
        <div className={stl.dialogsItems}>
            <div className={stl.item}>
                <img src="https://html5css.ru/howto/img_avatar.png" alt="" className={stl.itemAvaImage}/>
                <div className={stl.itemName}>Alex Lgtn</div>
            </div>
            <div className={stl.item}>
                <img src="https://html5css.ru/howto/img_avatar.png" alt="" className={stl.itemAvaImage}/>
                <div className={stl.itemName}>Pevel Legotin</div>
            </div>
            <div className={stl.item}>
                <img src="https://html5css.ru/howto/img_avatar.png" alt="" className={stl.itemAvaImage}/>
                <div className={stl.itemName}>Konstantin Ivanov</div>
            </div>
            <div className={stl.item}>
                <img src="https://html5css.ru/howto/img_avatar.png" alt="" className={stl.itemAvaImage}/>
                <div className={stl.itemName}>Dasha Lindenau</div>
            </div>
            <div className={stl.item}>
                <img src="https://html5css.ru/howto/img_avatar.png" alt="" className={stl.itemAvaImage}/>
                <div className={stl.itemName}>Denis Ignatenko</div>
            </div>

        </div>
    );
}

export default DialogsItems;