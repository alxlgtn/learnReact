import React from "react";
import stl from "./Search.module.css";

const SearchInput = (props) => {
    return (
        <input  className={stl.search_input} 
                type={props.headerSearchInputType} 
                name={props.headerSearchInputName} 
                id={props.headerSearchInputId} 
                placeholder={props.headerSearchInputPlaceholder}
        />
    );
}
 
const Search = (props) => {
    let searchInput = props.headerData.map ( f =>
        <SearchInput 
            headerSearchInputType={f.headerSearchInputType} 
            headerSearchInputName={f.headerSearchInputName} 
            headerSearchInputId={f.headerSearchInputId} 
            headerSearchInputPlaceholder={f.headerSearchInputPlaceholder} 
        />
    );

    return (
        <div className={stl.search_block}>
            {searchInput}
        </div>        
    );
}

// const Search = () => {
//     return (
//         <div className={stl.search_block}>
//             <input  className={stl.search_input} type="text" name="searchform" id="1" placeholder="Поиск"/>

//         </div>
//     );
// }

export default Search;