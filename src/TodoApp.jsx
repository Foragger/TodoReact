import { TodoList } from "./components/TodoList";
import { TodoAdd } from "./components/TodoAdd";
import { useTodo } from "./hooks/useTodo";

export const TodoApp = () => {
    //TODO: useTodo
    // todos, handleNewTodo,  handleRemoveTodo, handleToggleTodo

    const {
        todos,
        handleNewTodo,
        handleRemoveTodo,
        handleToggleTodo,
        todosCount,
        pendingTodosCount,
    } = useTodo();

    return (
        <>
            <h1>TodoApp By Tito</h1>
            <hr />
            <h2>Tareas: {todosCount}</h2>
            <h2>Pendientes: {pendingTodosCount}</h2>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList
                        todos={todos}
                        onRemoveTodo={handleRemoveTodo}
                        onToggleTodo={handleToggleTodo}
                    />
                </div>

                <div className="col-5">
                    <h4>Añadir Tarea:</h4>
                    <hr />
                    <TodoAdd onNewTodo={handleNewTodo} />
                </div>
            </div>
        </>
    );
};
