import React, { FormEvent, useState } from 'react';
import { useAuth } from './../Context/userAuth.tsx';
import { Link } from 'react-router-dom';
import '../Styles/LoginRegisterPage.css';

const LoginPage = () => {
  const { login } = useAuth();
  const [ username, setUsername ] = useState<string>("");
  const [ password, setPassword ] = useState<string>("");
  const [ error, setErrror ] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
  };

  const onClick = () => {
    try {
      login(username, password);
    } catch (err) {
      setErrror(err);
    }
  };

  return (
    <div className="login-wrapp">
      {error && <h1>{error}</h1>}
      <img  className="logo-form" src="https://cdn-icons-png.flaticon.com/512/4472/4472515.png" alt="logo"/>
      <form onSubmit={handleSubmit} className="input-form">
        <input placeholder="Username"
              type="username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)} />
        <input placeholder="Password" 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
        <div className="link-box">
          <Link to="/register"><p>Not registered?</p></Link>
        </div>
      </form>
      <button onClick={() => onClick()}>Login</button>
    </div> 
  )
}

export default LoginPage;