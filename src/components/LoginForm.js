import React, { useState } from 'react';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signInAnonymously,
} from 'firebase/auth';
import { auth } from '../services/firebase';
import '../styles/LoginForm.css';
import { FaGoogle, FaUser } from 'react-icons/fa';

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isRegistering, setIsRegistering] = useState(false);

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setError(null);

    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    try {
      if (isRegistering) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      onLogin();
    } catch (error) {
      console.error('Email login error:', error.code, error.message);
      if (error.code === 'auth/user-not-found') {
        setError('User not found. Please check your email address.');
      } else if (error.code === 'auth/wrong-password') {
        setError('Incorrect password. Please try again.');
      } else if (error.code === 'auth/email-already-in-use') {
        setError('Email address is already in use. Please choose a different email.');
      } else {
        setError('An error occurred during login. Please try again later.');
      }
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      onLogin();
    } catch (error) {
      console.error('Google login error:', error.code, error.message);
      setError('An error occurred during Google login. Please try again later.');
    }
  };

  const handleAnonymousLogin = async () => {
    try {
      await signInAnonymously(auth);
      onLogin();
    } catch (error) {
      console.error('Anonymous login error:', error.code, error.message);
      setError('An error occurred during anonymous login. Please try again later.');
    }
  };

  return (
    <div className="login-form">
      <h2>{isRegistering ? 'Register' : 'Login'}</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleEmailLogin}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit" className="login-button">
          {isRegistering ? 'Register' : 'Login'} with Email
        </button>
      </form>
      <button onClick={handleGoogleLogin} className="google-button">
        <FaGoogle className="icon" /> Login with Google
      </button>
      <button onClick={handleAnonymousLogin} className="anonymous-button">
        <FaUser className="icon" /> Login Anonymously
      </button>
      <p className="toggle-register">
        {isRegistering ? 'Already have an account?' : "Don't have an account?"}{' '}
        <span onClick={() => setIsRegistering(!isRegistering)}>
          {isRegistering ? 'Login' : 'Register'}
        </span>
      </p>
    </div>
  );
};

export default LoginForm;