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
                        <div>
                            <h1> TV Show WatchList </h1>
                            <button onClick={this.redirectToLogin}> Log In </button>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default Home
