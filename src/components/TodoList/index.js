import React from "react";
import "styles/TodoList.css";

function TodoList(props) {
    return (
        <li className="TodoList">
            <ul className="TodoListUL">{props.children}</ul>
        </li>
    );
}

export { TodoList };
