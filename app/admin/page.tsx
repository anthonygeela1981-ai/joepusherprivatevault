'use client';
import { useState } from 'react';

export default function AdminLogin() {
  const [pass, setPass] = useState('');

  const login = () => {
    if (pass === 'JoePusher2025!') {
      localStorage.setItem('admin', 'true');
      window.location.href = '/admin/dashboard';
    } else {
      alert('Wrong password');
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="bg-gray-900 p-10 rounded-lg">
        <h1 className="text-3xl text-red-600 mb-8 text-center">Admin Login</h1>
        <input
          type="password"
          placeholder="Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          className="w-full p-3 bg-gray-800 rounded mb-4 text-white"
        />
        <button
          onClick={login}
          className="w-full bg-red-600 hover:bg-red-700 p-3 rounded text-white font-bold"
        >
          Login
        </button>
      </div>
    </div>
  );
}
