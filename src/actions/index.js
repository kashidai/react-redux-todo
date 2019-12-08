let nextTodoId = 0;
export const addTodo = text => ({
    type: "ADD_TODO",
    id: nextTodoId++,
    text: text
});

export const deleteTodo = text => ({
    type: "DELETE_TODO",
    id: nextTodoId++,
    text: text
});
