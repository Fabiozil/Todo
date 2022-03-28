import React from "react";
import "styles/TodoLoading.css";

function TodoLoading() {
    return (
        <div className="LoadingTodo-container">
            <span className="LoadingTodo-complete"></span>
            <p className="LoadingTodo-text">Cargando</p>
            <span className="LoadingTodo-delete"></span>
        </div>
    );
}

export { TodoLoading };
