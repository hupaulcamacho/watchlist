import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Users extends Component {
    state = {
        users: []
    }
    componentDidMount = () => {
        this.getAllUsers()
    }

    getAllUsers = async () => {
        const URL = 'http://localhost:3100/users'
        try {
            let results = await axios.get(URL)
            console.log(results.data.payload)
            this.setState({
                users: results.data.payload
            })
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        const { users } = this.state 
        const userComponents = []
        users.forEach(user => {
            userComponents.push(
                <Link to={`/user/${user.id}`}>
                    <div className='user'>
                        <p>{user.username}</p>
                        <img src={user.avatar_url} width='200' />
                    </div>
                </Link>
            )
        })
        return (
            <div className='main'>
                <h1>Users</h1>
                {userComponents}
            </div>
        )
    }
}

export default Users
