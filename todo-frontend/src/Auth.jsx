import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  
  // Track input values
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Determine the display name
    let displayName = 'Guest';
    if (!isLogin && username.trim() !== '') {
      displayName = username; // Use username if signing up
    } else if (email.trim() !== '') {
      displayName = email.split('@')[0]; // Use the first part of the email if logging in
    }

    // Save the name to the browser's memory
    localStorage.setItem('taskMasterUser', displayName);
    
    navigate('/app');
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-950 via-purple-900 to-slate-900 flex justify-center items-center p-4 font-sans selection:bg-pink-500 selection:text-white">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.5)] border border-white/20 p-8 sm:p-10 transition-all duration-500">
        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-pink-300 via-purple-300 to-indigo-300 tracking-tight">
            {isLogin ? 'Welcome Back' : 'Join Task Master'}
          </h1>
          <p className="text-indigo-200 text-sm mt-2 font-medium">
            {isLogin ? 'Enter your credentials to access your TODOs.' : 'Create an account to organize your life.'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {!isLogin && (
            <div>
              <label className="block text-indigo-200 text-xs font-bold mb-2 uppercase tracking-wide">Username</label>
              <input 
                type="text" 
                required 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500/50 transition-all"
                placeholder="StarGazer99"
              />
            </div>
          )}
          
          <div>
            <label className="block text-indigo-200 text-xs font-bold mb-2 uppercase tracking-wide">Email</label>
            <input 
              type="email" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500/50 transition-all"
              placeholder="you@universe.com"
            />
          </div>

          <div>
            <label className="block text-indigo-200 text-xs font-bold mb-2 uppercase tracking-wide">Password</label>
            <input 
              type="password" 
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500/50 transition-all"
              placeholder="••••••••"
            />
          </div>

          <button 
            type="submit" 
            className="w-full mt-6 bg-linear-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white px-8 py-3.5 rounded-xl font-bold shadow-lg transform active:scale-95 transition-all duration-200"
          >
            {isLogin ? 'Log In' : 'Sign Up'}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-indigo-200 text-sm">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button 
              type="button"
              onClick={() => setIsLogin(!isLogin)} 
              className="text-pink-400 font-bold hover:text-pink-300 transition-colors bg-transparent border-none cursor-pointer"
            >
              {isLogin ? 'Sign Up' : 'Log In'}
            </button>
          </p>
        </div>

      </div>
    </div>
  );
}

export default Auth;