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
            <About aboutData={props.state.aboutData} />
            <Galery galeryData={props.state.galeryData}/>
            <SubmitPost submitPostData={props.state.submitPostData}/>
            <Posts postsData={props.state.postsData} />
=======
            <Galery galeryData={props.galeryData}/>
            <About aboutData={props.aboutData} />
            <SubmitPost submitPostData={props.submitPostData}/>
            <Posts postsData={props.postsData} />
>>>>>>> parent of dae5651... 29 lesson - state
        </div>
    );
}
export default Profile;