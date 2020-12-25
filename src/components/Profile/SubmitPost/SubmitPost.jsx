import React from "react";
import stl from "./SubmitPost.module.css";

const SubmitHeader = (props) => {
    return (
        <h4 className={stl.header}>{props.headerText}</h4>
    );
}
const SubmitTextarea = (props) => {
    return (
        <textarea
            className={stl.textarea}
            name={props.textareaName}
            id={props.textareaId}
            cols={props.textareaCols}
            rows={props.textareaRows}
            placeholder={props.textareaPlaceholder}>
        </textarea>
    );
}
const SubmitButton = (props) => {
    return (
        <button className={stl.button}>{props.buttonText}</button>
    );
}

const SubmitPost = (props) => {
    let submitHeaderBlock
        =props.submitPostData.map ( s =>
        <SubmitHeader
            headerText={s.headerText}
        /> );
    let submitTextareaBlock
        =props.submitPostData.map ( p =>
        <SubmitTextarea
            textareaName={p.textareaName}
            textareaId={p.textareaId}
            textareaCols={p.textareaCols}
            textareaRows={p.textareaRows}
            textareaPlaceholder={p.textareaPlaceholder}
        /> );
    let submitButtonBlock
        =props.submitPostData.map ( b =>
        <SubmitButton
            buttonText={b.buttonText}
        /> );
    return (
        <div className={stl.submitPostBlock}>
            {submitHeaderBlock}
            {submitTextareaBlock}
            {submitButtonBlock}
        </div>
    );
}

export default SubmitPost;