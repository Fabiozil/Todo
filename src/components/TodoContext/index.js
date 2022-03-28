import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();
function TodoProvider(props) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
    } = useLocalStorage("Todos_V1", []);
    const [openModal, setOpenModal] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState("");
    const completedTodos = todos.filter((todo) => !!todo.completed).length;
    const totalTodos = todos.length;
    let searchedTodos = [];

    if (!searchValue.length >= 1) {
        searchedTodos = todos;
    } else {
        searchedTodos = todos.filter((todo) => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
        });
    }
    const addTodo = (text) => {
        let newTodo = [...todos];
        newTodo.push({ completed: false, text: text });
        saveTodos(newTodo);
    };
    const completeTodos = (text) => {
        let newTodo = [...todos];
        newTodo.find((todo) => todo.text === text).completed = true;
        saveTodos(newTodo);
    };
    const deleteTodos = (text) => {
        let newTodo = [...todos];
        const itemIndex = newTodo.findIndex((todo) => todo.text === text);
        newTodo.splice(itemIndex, 1);
        saveTodos(newTodo);
    };
    return (
        <TodoContext.Provider
            value={{
                loading,
                error,
                totalTodos,
                completedTodos,
                searchValue,
                setSearchValue,
                searchedTodos,
                completeTodos,
                deleteTodos,
                openModal,
                setOpenModal,
                addTodo,
            }}
        >
            {props.children}
        </TodoContext.Provider>
    );
}
export { TodoContext, TodoProvider };
