import React from 'react';
import { useAuth } from '../Context/userAuth.tsx';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';

type Props = {}

const Navbar = (props: Props) => {
    const { user } = useAuth();

  return (
    <div className="navbar-box">
      <div className="nav-wrap">
        <img className="logo" src="https://cdn-icons-png.flaticon.com/512/4472/4472515.png" alt="logo"/>
        <Link to="/profile">{user?.username}</Link>
      </div>
    </div>
  )
}

export default Navbar;