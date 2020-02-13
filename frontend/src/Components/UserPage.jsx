import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class UserPage extends Component {
    state = {
        tempUser: {},
        watchList: []
    }

    componentDidMount = () => {
        this.getUser()
        this.getUserWatchList()
    }

    getUserWatchList = async () => {
        const { match:{ params } } = this.props;
        let URL = `/users/watchlist/${params.id}`
        try {
            let results = await axios.get(URL)
            console.log(results.data.payload)
            this.setState({
                watchList: results.data.payload
            })
        } catch (err) {
            console.log(err)
        }
    }

    getUser = async () => {
        const { match:{ params } } = this.props;
        console.log(params.id)
        let URL = `/users/${params.id}`
        try {
            let results = await axios.get(URL)
            console.log(results.data.payload[0])
            this.setState({
                tempUser: results.data.payload[0]
            })
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        const  { tempUser, watchList } = this.state
        const showComponents = []
        watchList.forEach(show => {
            showComponents.push(
                <Link to={`/shows/${show.id}`}>
                <div className='show'>
                    <div className='show-info'>
                        <p>{show.title}</p>
                    </div>
                    <img className='show-img' src={show.img_url} height='200' /><br/>
                </div>
                </Link>
            )
        })
        return (
            <div className='main'>
                <h1> {tempUser.username}'s WatchList </h1>
                <img className='user-icon-large'src={tempUser.avatar_url} height='200' /><br/>
                    <div className='show-container'>
                        {showComponents}
                    </div>
            </div>
        )
    }
}

export default UserPage
