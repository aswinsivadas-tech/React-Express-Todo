import express from 'express';
import cors from 'cors';
import todoRoutes from './routes/todoRoutes.js';

const app = express();

const corsOptions = {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
};

app.use(cors(corsOptions));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Task Master API is running securely with ES6!');
});

app.use('/api/todos', todoRoutes);

export default app;