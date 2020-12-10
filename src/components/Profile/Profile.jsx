import React from "react";
import stl from "./Profile.module.css";

const Profile = () => {
    return  <div className={stl.content}>
        <div>
            <img src="https://www.klaviyo.com/wp-content/uploads/2016/09/abstract-background-1024x273.jpg" alt=""/>
        </div>
        <div>
            <div>
                <img src="https://html5css.ru/howto/img_avatar.png" alt=""/>
            </div>
            <div>
                <h4>Alxlgtn</h4>
                <p className={stl.item}>13 april 1976</p>
                <p className={stl.item}>Kemerovo</p>
                <p className={stl.item}>KemGU</p>
                <p className={stl.item}>http://react.kuz</p>
            </div>
        </div>
        <div className={stl.post_form}>
            <h4>My post</h4>
            <textarea name="" id="" cols="30" rows="2">
                        type something...
                    </textarea>
            <button>Sand</button>
        </div>
        <div className={stl.comments}>
            <div className={stl.item}>
                <div className={stl.ava}>
                    <img src="https://html5css.ru/howto/img_avatar.png" alt=""/>
                </div>
                <div className={stl.text}>
                    <p>
                        lorem ipsum ...
                    </p>
                </div>
            </div>
        </div>
    </div>
}

export default Profile;