import React from "react";
import stl from "./SubmitPost.module.css";

const SubmitPost = () => {
    return (
        <div className={stl.submitPostBlock}>
            <h4 className={stl.header}>What's new?</h4>
            <textarea className={stl.textarea} name="text" id="" cols="30" rows="2" placeholder="...">

            </textarea>
            <button className={stl.button}>Sand</button>
        </div>
    );
}

export default SubmitPost;