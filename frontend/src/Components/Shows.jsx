import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import ShowPage from './ShowPage';

class Shows extends Component {
    state = {
        user: this.props.user,
        shows: [],
        genre_id: '',
        title: '',
        img_url: '',
        genres: []
    }

    componentDidMount = () => {
        this.getAllShows()
        this.loadOptions()
    }

    getAllShows = async () => {
        const URL = '/shows'
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
        const URL = `/shows/watchlist/${show_id}/${this.state.user.id}`
        try {
            await axios.post(URL)
        } catch(err) {
            console.log(err)
        }
    }

    renderShowPage = () => {
        return <ShowPage show_id={this.state.selectedId} />
    }

    loadOptions =  async () => {
        const URL = `/genres`
        try {
           let results = await axios.get(URL)
           console.log(results.data.payload)
           this.setState({
                genres: results.data.payload
           })
        } catch(err) {
            console.log(err)
        }
    }

    handleOptionChange = (e) => {
        console.log(e.target.option)
        console.log(e.target.value)
        this.setState({
            genre_id: e.target.value
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addNewShow = async (e) => {
        e.preventDefault()
        const { title, img_url, genre_id } = this.state
        const URL = `/shows/create`
        try {
            let results = await axios.post(URL, {title, img_url, genre_id})
            console.log(results.data.payload)
        } catch(err) {
            console.log(err)
        }
        this.getAllShows()
    }

    render() {
        const { shows, genres, title, img_url, genre_id} = this.state 
        const showComponents = []
        shows.forEach(show => {
            showComponents.push(
                <div className='show' id={show.id}>
                    <p>{show.title}</p>
                    Genre: {show.genre_name}<br/>
                    <Link to={`/shows/${show.id}`}>
                        <img src={show.img_url} height='200' /><br/>
                    </Link>
                    <button className='submit-button' id={show.id} onClick={this.addToWatchlist}>Add to WatchList</button>
                </div>
            )
        })
        const genreOptions = []
        genres.forEach(genre => {
            genreOptions.push(
                <option value={genre.id}>{genre.genre_name}</option>
            )
        })
        return (
            <div>
                <div className='main'>
                    <h1> Shows </h1>
                    <div className='form-container'>
                        <h3> Add New Show </h3>
                        <form onSubmit={this.addNewShow}>
                            Title:
                            <input name='title' type='text' value={title} onChange={this.handleChange} /><br/>
                            Show Image Url:
                            <input name='img_url'type='text' value={img_url} onChange={this.handleChange} /><br/>
                            Genre:
                            <select onChange={this.handleOptionChange}>
                                <option value='Select Genre'>Select Genre</option>
                                {genreOptions}
                            </select><br/>
                            <input type='submit' value='submit' className='submit-button' />
                        </form>
                    </div>
                    <div className='show-container'>
                        {showComponents}
                    </div>

                    
                </div>
            </div>
        )
    }
}

export default Shows