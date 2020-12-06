import {Component} from "react";

const Profile = () => {
    return  <div className="content">
        <div>
            <img src="https://www.klaviyo.com/wp-content/uploads/2016/09/abstract-background-1024x273.jpg" alt=""/>
        </div>
        <div>
            <div>
                <img src="https://html5css.ru/howto/img_avatar.png" alt=""/>
            </div>
            <div>
                <h4>Alxlgtn</h4>
                <p className="date">13 april 1976</p>
                <p className="place">Kemerovo</p>
                <p className="education">KemGU</p>
                <p className="site">http://react.kuz</p>
            </div>
        </div>
        <div className="post_form">
            <h4>My post</h4>
            <textarea name="" id="" cols="30" rows="2">
                        type something...
                    </textarea>
            <button>Sand</button>
        </div>
        <div className="comments">
            <div className="comments--item">
                <div className="comments--ava">
                    <img src="https://html5css.ru/howto/img_avatar.png" alt=""/>
                </div>
                <div className="comments--text">
                    <p>
                        lorem ipsum ...
                    </p>
                </div>
            </div>
        </div>
    </div>
}

export default Profile