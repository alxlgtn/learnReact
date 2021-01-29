import React from "react";
import stl from "./Profile.module.css";

import Galery from "./Galery/Galery";
import About from "./About/About";
import SubmitPost from "./SubmitPost/SubmitPost";
import Posts from "./Posts/Posts";

const Profile = (props) => {
    return (
        <div className={stl.content}>
<<<<<<< HEAD
            <About aboutData={props.aboutData} />
            <Galery galeryData={props.galeryData}/>
            <SubmitPost submitPostData={props.submitPostData}/>
            <Posts postsData={props.postsData} />
=======
            <Galery galeryData={props.state.galeryData}/>
            <About aboutData={props.state.aboutData} />
            <SubmitPost submitPostData={props.state.submitPostData}/>
            <Posts postsData={props.state.postsData} />
>>>>>>> parent of ab2f713... brackepoint
        </div>
    );
}
export default Profile;