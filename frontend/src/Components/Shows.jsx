import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import ShowPage from './ShowPage';

class Shows extends Component {
    state = {
        user: this.props.user,
        shows: []
    }

    componentDidMount = () => {
        this.getAllShows()
    }

    getAllShows = async () => {
        const URL = 'http://localhost:3100/shows'
        try {
            let results = await axios.get(URL)
            console.log(results.data.payload)
            this.setState({
                shows: results.data.payload
            })
        } catch (err) {
            console.log(err)
        }
    }

    addToWatchlist = async (e) => {
        let show_id = e.target.id
        const URL = `http://localhost:3100/shows/watchlist/${show_id}/${this.state.user.id}`
        try {
            await axios.post(URL)
        } catch(err) {
            console.log(err)
        }
    }

    renderShowPage = () => {
        return <ShowPage show_id={this.state.selectedId} />
    }

    render() {
        const { shows, showClicked, selectedId } = this.state 
        const showComponents = []
        shows.forEach(show => {
            showComponents.push(
                <Link to={`/shows/${show.id}`}>
                <div className='show' id={show.id}>
                    <p>{show.title}</p>
                    <img src={show.img_url} height='200' /><br/>
                    <button id={show.id} onClick={this.addToWatchlist}>Add to WatchList</button>
                </div>
                </Link>
                
            )
        })
        return (
            <div>
                <div className='main'>
                    <h1> Shows </h1>
                    {showComponents}
                </div>
            </div>
        )
    }
}

export default Shows