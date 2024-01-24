import React from "react";

import SearchBar from "./components/searchBar";
import SearchList from "./components/searchList";
import style from './index.module.scss'

const Search: React.FC = () => {
    return <div className={style.search}>
        <SearchBar />
        <SearchList />
    </div> 
}

export default Search;