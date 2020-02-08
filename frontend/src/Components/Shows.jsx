import React, { Component } from 'react'
import axios from 'axios'

class Shows extends Component {
    state = {
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

    render() {
        const { shows } = this.state 
        const showComponents = []
        shows.forEach(show => {
            showComponents.push(
                <div className='show'>
                    <p>{show.title}</p>
                    <img src={show.img_url} height='200' />
                </div>
            )
        })
        return (
            <div className='main'>
                <h1> Shows </h1>
                {showComponents}
            </div>
        )
    }
}

export default Shows