import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Home extends Component {
    state = {
        loginClicked: false
    }
    redirectToLogin = () => {
        this.setState({loginClicked:true})
    }

    render() {
        const { loginClicked } = this.state
        return (
            
            <div className='main'>
                {
                    loginClicked 
                    ? <Redirect to='/login'/> 
                    : (
                        <div className='main'>
                            <h1> Welcome to WatchList! </h1>
                            <p>Post, comment on, and keep track of TV shows that you and friends are binging on!</p>
                            <img 
                            className='home-img'
                            src='https://i0.wp.com/thevoiceofblackcincinnati.com/wp-content/uploads/2019/03/167250342_Couple-watching-TV_1024.jpg?fit=3100%2C2069&ssl=1' 
                            height='500'
                            />
                            <button className='submit-button' onClick={this.redirectToLogin}> Log In </button>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default Home
