import React from "react";
import stl from "./PersonAva.module.css";

const PersonAva = (props) => {
    let ava = props.headerData.map (a => <Ava 
        headerAvaLink={a.headerAvaLink}
        headerAvaImgLink={a.headerAvaImgLink}
        headerAvaImgAltText={a.headerAvaImgAltText}
        headerNickName={a.headerNickName}
    />);

    return (
        <div className={stl.personAvaBlock}>
            {ava}
        </div>
    );
}

const Ava = (props) => {
    return (
        <a className={stl.item} href="./">
            <img className={stl.img} src={props.headerAvaImgLink} alt={props.headerAvaImgAltText} />
            <p className={stl.name}>{props.headerNickName}</p>
        </a>
    );
}
// const PersonAva = (props) => {
//     return (
//         <div className={stl.personAvaBlock}>
//             <a className={stl.item} href="./">
//                 <img className={stl.ava} src="https://html5css.ru/howto/img_avatar.png" alt=""/>
//             </a>
//             <p className={stl.item}>Alxlgtn</p>
//         </div>
//     );
// }

export default PersonAva;