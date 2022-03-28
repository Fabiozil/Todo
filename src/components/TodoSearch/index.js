import React from "react";
import "styles/TodoSearch.css";
import { TodoContext } from "../TodoContext";

function TodoSearch() {
    const { setSearchValue, searchValue } = React.useContext(TodoContext);
    const onSearchValueChanged = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <input
            placeholder="Type keywords to filter"
            className="TodoSearch"
            value={searchValue}
            onChange={onSearchValueChanged}
        />
    );
}

export { TodoSearch };
