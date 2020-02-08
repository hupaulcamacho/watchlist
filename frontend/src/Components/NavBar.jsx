import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = ({ logoutUser, isUserLoggedIn }) => {
    if (isUserLoggedIn) {
        return (
          <nav>
            <Link to='/'>Home</Link>{" "}
            <Link to='/users'>Users</Link>{" "}
            <Link to='/shows'>Shows</Link>{" "}
            <Link to='/about'>About</Link>
            <button onClick={logoutUser}>Log-out</button>
          </nav>
        )
      }
    
    return (
        <nav>
            <Link to="/" >Home</Link>{" "}
            <Link to="/login" >Log-In</Link>{" "}
            <Link to="/signup" >Sign-Up</Link>{" "}
            <Link to='/about'>About</Link>
        </nav>
    )
}


export default NavBar