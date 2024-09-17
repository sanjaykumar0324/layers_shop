import axios from 'axios';
import React, { useState, FormEvent } from 'react';

function Login() {
 
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  
  const handleSubmit = async(e: FormEvent) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          
          username,
          password
        }),
      })
      .then(res => res.json())
      .then(console.log);

  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form 
        className="bg-white p-6 rounded-lg shadow-lg" 
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 font-bold mb-2">
            Username
          </label>
          <input 
            type="text" 
            id="username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your username" 
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
            Password
          </label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password" 
            required
          />
        </div>

        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;