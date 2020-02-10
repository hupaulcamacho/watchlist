import React, { Component } from 'react'
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'

class Profile extends Component {
    state = {
        addShowClicked: false,
        watchList: []
    }
    componentDidMount = () => {
        this.getUserWatchList()
    }

    getUserWatchList = async () => {
        let { user } = this.props
        let URL = `/users/watchlist/${user.id}`
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

    redirectToShows = () => {
        this.setState({ addShowClicked:true })
    }

    render() {
        let { user } = this.props
        let { addShowClicked } = this.state
        const { watchList } = this.state 
        const showComponents = []
        watchList.forEach(show => {
            showComponents.push(
                <div className='show'>
                    <p>{show.title}</p>
                    <Link to={`/shows/${show.id}`}>
                        <img src={show.img_url} height='200' /><br/>
                    </Link>
                </div>
                
            )
        })
        return (
            <div className='main'>
                {
                    addShowClicked 
                    ? <Redirect to='/shows'/> 
                    : (
                        <div>
                            <h1> {user.username}'s WatchList </h1>
                            <button onClick={this.redirectToShows}> Add Shows to Watchlist </button>
                            <div className='show-container'>
                                {showComponents}
                            </div>
                        </div>
                    )
                } 
            </div>
        )
    }
}

export default Profile
