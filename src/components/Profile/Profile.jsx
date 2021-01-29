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
<<<<<<< HEAD
            <About aboutData={props.state.aboutData} />
=======
>>>>>>> parent of ab2f713... brackepoint
            <Galery galeryData={props.state.galeryData}/>
            <About aboutData={props.state.aboutData} />
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