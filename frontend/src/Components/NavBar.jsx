import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = ({ logoutUser, isUserLoggedIn, user }) => {
    if (isUserLoggedIn) {
        return (
          <div>
          <nav>
            <b className='title'>WatchList</b>
            <Link to='/shows'>Shows</Link>{" "}
            <Link to='/users'>Users</Link>{" "}
            <Link to='/profile'>Profile</Link>{" "}
            <Link to='/about'>About</Link>
            <button className='logout-button' onClick={logoutUser}>Log Out</button>
          </nav>
          <Link to='/profile'>
          <div className="main-user">
            <img className='user-icon'src={user.avatar_url} height='50'/> <br/>
            <b className="username">{user.username}</b>
          </div>
          </Link>
            
          </div>
        )
      }
    
    return (
        <nav>
          <b className='title'>WatchList</b>
          <Link to="/" >Home</Link>{" "}
          <Link to="/login" >Log-In</Link>{" "}
          <Link to="/signup" >Sign-Up</Link>{" "}
          <Link to='/about'>About</Link>
        </nav>
    )
}


export default NavBar