import React from "react";
import { TodoContext } from "../TodoContext";
import "styles/TodoForm.css";

function TodoForm() {
    const [text, setText] = React.useState("");
    const { addTodo, setOpenModal } = React.useContext(TodoContext);
    const onCancel = () => {
        setOpenModal(false);
    };

    const onAdd = (event) => {
        event.preventDefault();
        addTodo(text);
        setOpenModal(false);
    };

    const textChanged = (event) => {
        setText(event.target.value);
    };
    return (
        <form onSubmit={onAdd} className="TodoForm">
            <label>Describe your new To Do</label>
            <br></br>
            <textarea
                value={text}
                placeholder="Study about new ways to make money"
                onChange={textChanged}
            ></textarea>
            <div className="TodoFormButtonsContainer">
                <button
                    type="button"
                    onClick={onCancel}
                    className="ButtonCancel"
                >
                    Cancel
                </button>
                <button type="submit" className="ButtonAdd">
                    Add
                </button>
            </div>
        </form>
    );
}

export { TodoForm };
