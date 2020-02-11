import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = ({ logoutUser, isUserLoggedIn, user }) => {
    if (isUserLoggedIn) {
        return (
          <div>
          <nav>
            <b>WatchList</b>
            <Link to='/shows'>Shows</Link>{" "}
            <Link to='/users'>Users</Link>{" "}
            <Link to='/profile'>Profile</Link>{" "}
            <Link to='/about'>About</Link>
            <button onClick={logoutUser}>Log-out</button>
          </nav>
          <div className="user">
            <Link to='/profile'>
              <img src={user.avatar_url} height='50'/>
            </Link>
            {user.username}
          </div>
            
          </div>
        )
      }
    
    return (
        <nav>
          <b>WatchList</b>
          <Link to="/" >Home</Link>{" "}
          <Link to="/login" >Log-In</Link>{" "}
          <Link to="/signup" >Sign-Up</Link>{" "}
          <Link to='/about'>About</Link>
        </nav>
    )
}


export default NavBar