import React from "react";
import stl from "./Profile.module.css";

import Galery from "./Galery/Galery";
import About from "./About/About";
import SubmitPost from "./SubmitPost/SubmitPost";
import Posts from "./Posts/Posts";

const Profile = (props) => {
    return (
        <div className={stl.content}>
            <Galery galeryData={props.galeryData}/>
            <About aboutData={props.aboutData} />
            <SubmitPost submitPostData={props.submitPostData}/>
            <Posts postsData={props.postsData} />
        </div>
    );
}
export default Profile;