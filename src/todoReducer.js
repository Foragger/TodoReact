// {type: [todo remove], payload: todo or id, but it is id, we need to change how we called in the other functions}

export const todoReducer = (initialState = [], action) => {
    switch (action.type) {
        case "[TODO] add todo":
            return [...initialState, action.payload];
        case "[TODO] remove todo":
            return initialState.filter((todo) => todo.id !== action.payload); // regresa un nuevo arreglo, sin mutarlo
        case "[TODO] toggle todo":
            return initialState.map((todo) => {
                if (todo.id === action.payload) {
                    // id
                    return {
                        ...todo,
                        done: !todo.done,
                    };
                }
                return todo;
            });

        default:
            return initialState;
    }
};
