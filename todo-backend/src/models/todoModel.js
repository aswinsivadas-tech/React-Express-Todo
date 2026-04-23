let todos = [
    { id: 1, text: 'Set up the React frontend', username: 'System' }
];

export const getAll = () => todos;

export const add = (newTodo) => {
    todos.push(newTodo);
    return newTodo;
};

export const update = (id, text) => {
    const index = todos.findIndex(t => t.id === id);
    if (index !== -1) {
        todos[index].text = text;
        return todos[index];
    }
    return null;
};

export const remove = (id) => {
    todos = todos.filter(t => t.id !== id);
    return true;
};