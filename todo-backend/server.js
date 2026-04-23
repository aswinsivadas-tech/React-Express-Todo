import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// In-memory database for demonstration purposes
let todos = [
    { id: 1, text: 'Set up the React frontend', username: 'System' }
];

// GET: Fetch all todos
app.get('/api/todos', (req, res) => {
    res.json(todos);
});

// POST: Add a new todo
app.post('/api/todos', (req, res) => {
    const newTodo = {
        id: Date.now(),
        text: req.body.text,
        username: req.body.username
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

// PUT: Edit an existing todo
app.put('/api/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = todos.findIndex(t => t.id === id);
    
    if (index !== -1) {
        todos[index].text = req.body.text;
        res.json(todos[index]);
    } else {
        res.status(404).json({ error: 'Todo not found' });
    }
});

// DELETE: Remove a todo
app.delete('/api/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    todos = todos.filter(t => t.id !== id);
    res.json({ success: true });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));