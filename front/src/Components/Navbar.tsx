import React from 'react'
import { useAuth } from '../Context/userAuth.tsx'

type Props = {}

const Navbar = (props: Props) => {
    const { isLoggedIn, user, logout } = useAuth();

  return (
    <div>
        <img className="logo" src="https://cdn-icons-png.flaticon.com/512/4472/4472515.png" alt="logo"/>
        <div>
            {user?.username}
            <button onClick={ logout }>Logout</button>
        </div>
    </div>
  )
}

export default Navbar