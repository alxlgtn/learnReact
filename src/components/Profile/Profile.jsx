import React from "react";
import stl from "./Profile.module.css";

import Galery from "./Galery/Galery";
import About from "./About/About";
import SubmitPost from "./SubmitPost/SubmitPost";
import Posts from "./Posts/Posts";

const Profile = (props) => {
    return (
        <div className={stl.content}>
            <About aboutData={props.aboutData} />
            <Galery galeryData={props.galeryData}/>
            <SubmitPost submitPostData={props.submitPostData}/>
            <Posts postsData={props.postsData} />
        </div>
    );
}
export default Profile;