import { useState, useEffect } from 'react';
import TodoItem from './TodoItem';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');
  const [currentUser, setCurrentUser] = useState('Guest');

  useEffect(() => {
    fetch('http://localhost:5000/api/todos')
      .then(res => res.json())
      .then(data => setTodos(data))
      .catch(err => console.error("Error fetching data:", err));
  }, []);

  const handleAddTodo = async (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const response = await fetch('http://localhost:5000/api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: inputText, username: currentUser })
    });
    
    const newTodo = await response.json();
    setTodos([...todos, newTodo]);
    setInputText('');
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/api/todos/${id}`, { method: 'DELETE' });
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleEdit = async (id, newText) => {
    const response = await fetch(`http://localhost:5000/api/todos/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: newText })
    });
    
    const updatedTodo = await response.json();
    setTodos(todos.map(todo => todo.id === id ? updatedTodo : todo));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900 flex flex-col items-center py-6 sm:py-12 px-4 sm:px-8 font-sans selection:bg-pink-500 selection:text-white">
      
      {/* Main Glass App Container */}
      <div className="w-full max-w-5xl bg-white/10 backdrop-blur-xl rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.5)] border border-white/20 flex flex-col h-[90vh] sm:h-[85vh] overflow-hidden">
        
        {/* Header */}
        <div className="px-6 sm:px-10 py-6 bg-white/5 border-b border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 tracking-tight text-center sm:text-left">
              MY_TODOs
            </h1>
            <p className="text-indigo-200 text-sm mt-1 font-medium text-center sm:text-left">Organize your universe.</p>
          </div>
          
          <div className="flex items-center gap-3 bg-black/20 px-4 py-2 rounded-full border border-white/10 transition-all hover:bg-black/30">
            <span className="text-sm text-indigo-200 font-medium">👤</span>
            <input 
              className="bg-transparent text-white placeholder-indigo-400 outline-none w-24 sm:w-32 font-medium text-sm focus:w-40 transition-all duration-300"
              value={currentUser}
              onChange={(e) => setCurrentUser(e.target.value)}
              placeholder="Your Name"
            />
          </div>
        </div>

        {/* Input Section */}
        <div className="p-6 sm:p-10 pb-4">
          <form onSubmit={handleAddTodo} className="relative group">
            <input
              type="text"
              className="w-full bg-white/5 border border-white/10 text-white placeholder-indigo-300/50 px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:bg-white/10 transition-all duration-300 text-lg shadow-inner"
              placeholder="What is your next great achievement?"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <button 
              type="submit" 
              className="mt-4 sm:mt-0 sm:absolute right-2 top-2 bottom-2 w-full sm:w-auto bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white px-8 py-3 sm:py-0 rounded-xl font-bold shadow-lg transform active:scale-95 transition-all duration-200"
            >
              Add Task
            </button>
          </form>
        </div>

        {/* Scrollable List Area */}
        <div className="flex-1 overflow-y-auto px-6 sm:px-10 pb-10 space-y-4">
          {todos.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-indigo-300/40 space-y-4">
              <svg className="w-24 h-24 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
              <p className="text-xl font-medium tracking-wide">Your canvas is blank.</p>
            </div>
          ) : (
            todos.map(todo => (
              <TodoItem 
                key={todo.id} 
                todo={todo} 
                onDelete={handleDelete} 
                onEdit={handleEdit}
                currentUser={currentUser}
              />
            ))
          )}
        </div>

      </div>
    </div>
  );
}

export default App;