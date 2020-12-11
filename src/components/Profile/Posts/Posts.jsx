import React from "react";
import stl from "./Posts.Module.css";

import PostItem from "./PostItem/PostItem";

const Posts = () => {
    return (
        <div className={stl.postsBlock}>
            <PostItem />
            <PostItem />
            {/*<div className={stl.item}>*/}
            {/*    <div className={stl.ava}>*/}
            {/*        <img src="https://html5css.ru/howto/img_avatar.png" alt=""/>*/}
            {/*    </div>*/}
            {/*    <div className={stl.text}>*/}
            {/*        <p>*/}
            {/*            Вы определяете, какие элементы должны уменьшиться в размерах, а какие — нет. По умолчанию значение flex-shrink для каждого квадрата равно 1. Это значит, что квадраты будут сжиматься, когда контейнер будет уменьшаться.*/}
            {/*        </p>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
}

export default Posts;