import  { useState } from 'react';

// Receiving Props from App.jsx
function TodoItem({ todo, onDelete, onEdit, currentUser }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const saveEdit = () => {
    if (editText.trim()) {
      onEdit(todo.id, editText);
      setIsEditing(false);
    }
  };

  // --- Conditional Rendering: Edit Mode ---
  if (isEditing) {
    return (
      <div className="flex flex-col sm:flex-row items-center gap-3 p-4 bg-yellow-50 border-l-4 border-yellow-400 shadow-sm rounded-r-lg transition-all">
        <input 
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          className="flex-1 px-3 py-1.5 border border-yellow-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full"
          autoFocus
        />
        {/* Shows who is currently editing as requested */}
        <span className="text-xs font-semibold text-yellow-700 italic">
          Editing as {currentUser}...
        </span>
        <div className="flex gap-2 w-full sm:w-auto">
          <button 
            onClick={saveEdit} 
            className="bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 rounded text-sm font-medium w-full sm:w-auto"
          >
            Save
          </button>
          <button 
            onClick={() => setIsEditing(false)} 
            className="bg-slate-300 hover:bg-slate-400 text-slate-800 px-3 py-1.5 rounded text-sm font-medium w-full sm:w-auto"
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }

  // --- Conditional Rendering: View Mode ---
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 bg-white shadow-sm border border-slate-200 rounded-lg hover:shadow-md transition-shadow">
      <div className="mb-3 sm:mb-0">
        <p className="text-slate-800 text-lg font-medium">{todo.text}</p>
        <p className="text-xs text-slate-400 mt-1">
          Originally added by: <span className="font-semibold text-slate-500">{todo.username}</span>
        </p>
      </div>
      
      <div className="flex gap-2 w-full sm:w-auto">
        <button 
          onClick={() => setIsEditing(true)} 
          className="flex-1 sm:flex-none border border-slate-300 text-slate-600 hover:bg-slate-100 hover:text-blue-600 px-4 py-1.5 rounded text-sm font-medium transition-colors"
        >
          Edit
        </button>
        <button 
          onClick={() => onDelete(todo.id)} 
          className="flex-1 sm:flex-none border border-slate-300 text-slate-600 hover:bg-red-50 hover:border-red-200 hover:text-red-600 px-4 py-1.5 rounded text-sm font-medium transition-colors"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;