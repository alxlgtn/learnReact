import React from "react";
import stl from "./Posts.Module.css";
import PostItem from "./PostItem/PostItem";


const Posts = (props) => {
    let postElement
        =props.postsData.map(p =>
        <PostItem
            avaImg={p.avaImg}
            avaImgAlt={p.avaImgAlt}
            usrName={p.usrName}
            postDate={p.postDate}
            postTime={p.postTime}
            postText={p.postText}
            postLikeCount={p.postLikeCount}
            postViewsCount={p.postViewsCount}
        />
    );
    return (
        <div className={stl.postsBlock}>
            {postElement}
        </div>
    );
}
export default Posts;