import React from "react";
import "styles/TodoItem.css";
import { CompleteIcon } from "../CompleteIcon";
import { DeleteIcon } from "../DeleteIcon";
import { TodoIcon } from "../TodoIcon";

function TodoItem({ text, completed, onComplete, onDelete }) {
    let completedClass = "Item";
    let itemClass = "TodoItem";
    if (completed) {
        completedClass = completedClass + " ItemCompleted";
        itemClass = itemClass + " TodoItemCompleted";
    }

    return (
        <li className={itemClass}>
            <CompleteIcon completed={completed} onComplete={onComplete} />
            <p className="p">{text}</p>
            <DeleteIcon onDelete={onDelete} />
        </li>
    );
}

export { TodoItem };
