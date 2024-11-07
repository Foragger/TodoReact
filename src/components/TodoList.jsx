import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos = [], onRemoveTodo, onToggleTodo }) => {
    return (
        <ul className="list-group">
            {todos.map((todo) => (
                //todo item .... mandar la informacion correcta y  solo mostrarlo
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onRemoveTodo={onRemoveTodo}
                    onToggleTodo={onToggleTodo}
                />
            ))}
        </ul>
    );
};
