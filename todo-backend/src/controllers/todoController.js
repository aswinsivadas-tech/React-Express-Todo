import * as TodoModel from '../models/todoModel.js';

export const getTodos = (req, res) => {
    const todos = TodoModel.getAll();
    res.json(todos);
};

export const createTodo = (req, res) => {
    const newTodo = {
        id: Date.now(),
        text: req.body.text,
        username: req.body.username
    };
    const savedTodo = TodoModel.add(newTodo);
    res.status(201).json(savedTodo);
};

export const updateTodo = (req, res) => {
    const id = parseInt(req.params.id);
    const updatedTodo = TodoModel.update(id, req.body.text);
    
    if (updatedTodo) {
        res.json(updatedTodo);
    } else {
        res.status(404).json({ error: 'Todo not found' });
    }
};

export const deleteTodo = (req, res) => {
    const id = parseInt(req.params.id);
    TodoModel.remove(id);
    res.json({ success: true });
};