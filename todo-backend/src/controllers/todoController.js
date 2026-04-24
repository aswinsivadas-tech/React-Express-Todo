import Todo from '../models/todoModel.js';

export const getTodos = async (req, res) => {
    try {
        const userId = req.headers['user-id'];

        if(!userId) {
            return res.status(400).json({message: "User ID is required"});
        }

        const todos = await Todo.find({ userId: userId});
        res.json(todos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createTodo = async (req, res) => {
    try {
        const newTodo = await Todo.create({
            text: req.body.text,
            username: req.body.username,
            userId: req.body.userId
        });
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const updateTodo = async (req, res) => {
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(
            req.params.id, 
            { text: req.body.text }, 
            { new: true } // Returns the updated document instead of the old one
        );
        res.json(updatedTodo);
    } catch (error) {
        res.status(404).json({ message: 'Todo not found' });
    }
};

export const deleteTodo = async (req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.id);
        res.json({ success: true, message: 'Task deleted' });
    } catch (error) {
        res.status(404).json({ message: 'Todo not found' });
    }
};