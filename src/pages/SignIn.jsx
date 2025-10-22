import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function onSubmit(e) {
    e.preventDefault();
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('✅ Signed in successfully');
      navigate('/');
    } catch (e) {
      console.error('❌ Sign-in error:', e.message);
      setError(e.message);
    }
  }

  async function signInGoogle() {
    setError('');
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      console.log('✅ Signed in with Google');
      navigate('/');
    } catch (e) {
      console.error('❌ Google sign-in error:', e.message);
      setError(e.message);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="card w-full max-w-md p-6 bg-slate-800 text-white rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Sign In</h1>

        {error && <div className="text-red-400 text-sm mb-3 text-center">{error}</div>}

        <form onSubmit={onSubmit} className="space-y-3">
          <input
            className="input w-full text-slate-900"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="input w-full text-slate-900"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-primary w-full">
            Sign In
          </button>
        </form>

        <button
          onClick={signInGoogle}
          className="btn btn-ghost w-full mt-3 border border-slate-600 hover:bg-slate-700"
        >
          Sign in with Google
        </button>

        <p className="text-sm text-slate-400 mt-3 text-center">
          No account?{' '}
          <Link to="/signup" className="text-sky-400 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
