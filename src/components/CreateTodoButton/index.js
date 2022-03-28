import React from "react";
import "styles/CreateTodoButton.css";
import { TodoContext } from "../TodoContext";

function CreateTodoButton() {
    const onClickButton = () => {
        setOpenModal((prevState) => !prevState);
    };

    const { setOpenModal, openModal } = React.useContext(TodoContext);

    return (
        <button className="CreateTodoButton" onClick={onClickButton}>
            {openModal ? "X" : "+"}
        </button>
    );
}

export { CreateTodoButton };
