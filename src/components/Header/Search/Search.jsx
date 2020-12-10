import React from "react";
import stl from "./Search.module.css";

const Search = () => {
    return (
        <div className={stl.search_block}>
            <input  className={stl.search_input} type="text" name="" id="" placeholder="Поиск"/>

        </div>
    );
}

export default Search;