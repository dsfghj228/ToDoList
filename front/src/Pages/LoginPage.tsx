import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './../Context/userAuth.tsx';

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [ username, setUsername ] = useState<string>("");
  const [ password, setPassword ] = useState<string>("");
  const [ error, setErrror ] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
  };

  const onClick = () => {
    try {
      login(username, password);
      //navigate('/dashboard');
    } catch (err) {
      setErrror(err);
    }
  };

  return (
    <div>
      {error && <h1>{error}</h1>}
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Username" 
              type="username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)} />
        <input placeholder="password" 
              type="password" 
              value={password}
              autocomplete="new-password"
              onChange={(e) => setPassword(e.target.value)} />
      </form>
      <button onClick={() => onClick()}>Login</button>
    </div> 
  )
}

export default LoginPage;