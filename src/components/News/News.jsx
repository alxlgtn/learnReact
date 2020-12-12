import React from "react";
import stl from "./News.module.css";

import NewsBlock from "./NewsBlock/NewsBlock";

const News = () => {
    return (
        <div className={stl.content}>
            <NewsBlock />
        </div>
    );
}

export default News;