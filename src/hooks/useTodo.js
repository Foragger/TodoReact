import { useEffect, useReducer } from "react";
import { todoReducer } from "../todoReducer";

const initialState = [];
const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodo = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const handleNewTodo = (todo) => {
        const action = {
            type: "[TODO] add todo",
            payload: todo,
        };

        dispatch(action);
    };

    const handleRemoveTodo = (id) => {
        const action = {
            type: "[TODO] remove todo",
            payload: id,
        };
        dispatch(action);
    };
    const handleToggleTodo = (id) => {
        dispatch({
            type: "[TODO] toggle todo",
            payload: id,
        });
    };

    const todosCount = todos.length;
    const pendingTodosCount = todos.filter((todo) => !todo.done).length;
    return {
        ...todos,
        todos,
        todosCount,
        pendingTodosCount,
        handleNewTodo,
        handleRemoveTodo,
        handleToggleTodo,
    };
};
