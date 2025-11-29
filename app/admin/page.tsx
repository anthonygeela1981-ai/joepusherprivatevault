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
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ backgroundColor: '#111', padding: '3rem', borderRadius: '1rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#dc2626', marginBottom: '2rem' }}>
          Admin Login
        </h1>
        <input
          type="password"
          placeholder="Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          style={{ width: '100%', padding: '1rem', backgroundColor: '#222', color: '#fff', borderRadius: '0.5rem', marginBottom: '1rem', fontSize: '1.2rem' }}
        />
        <button
          onClick={login}
          style={{ backgroundColor: '#dc2626', color: '#fff', padding: '1rem 2rem', border: 'none', borderRadius: '0.5rem', fontSize: '1.2rem', cursor: 'pointer' }}
        >
          Login
        </button>
      </div>
    </div>
  );
}
