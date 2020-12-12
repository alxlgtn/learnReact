import React from "react";
import stl from "./DialogsPosts.Module.css";
import DialogsPostsItem from "./DialogsPostsItem/DialogsPostsItem";

let textForPost1 = "Внезапно, представители современных социальных резервов освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, представлены в исключительно положительном свете.";
let textForPost2 = "Идейные соображения высшего порядка, а также понимание сути ресурсосберегающих технологий требует анализа системы массового участия.";


const DialogsPosts = () => {


    return (
        <div className={stl.postsBlock}>
            <DialogsPostsItem usrName="Alex Legotin"
                              postDate="08.12.2020"
                              postTime="12:27"
                              postText={textForPost1}
            />
            <DialogsPostsItem usrName="Kost Ivanov"
                              postDate="11.12.2020"
                              postTime="16:55"
                              postText={textForPost2}
            />
        </div>
    );
}

export default DialogsPosts;