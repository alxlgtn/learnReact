import React from "react";
import stl from "./Profile.module.css";

import Galery from "./Galery/Galery";
import About from "./About/About";
import SubmitPost from "./SubmitPost/SubmitPost";
import Posts from "./Posts/Posts";

const Profile = () => {
    return (
        <div className={stl.content}>
            <Galery />
            <About />
            <SubmitPost />
            <Posts />
        </div>
    );
}

export default Profile;