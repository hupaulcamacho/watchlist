import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
class ShowPage extends Component {
    state = {
        user: this.props.user,
        show: {},
        watchers:[],
        comments: [],
        comment_body: ''
    }

    componentDidMount = () => {
        this.getShow()
        this.getComments()
        this.getWatchers()
        // console.log(this.props.routeprops)
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({
            comment_body: e.target.value
        })
    }

    getShow = async () => {
        const { routeprops: { match:{ params } } } = this.props;
        
        const URL = `/shows/${params.id}`
        try {
            let results = await axios.get(URL)
            console.log(results.data.payload)
            this.setState({
                show: results.data.payload[0]
            })
        } catch (err) {
            console.log(err)
        }
    }
    getComments = async () => {
        const { routeprops: { match:{ params } } } = this.props;
        const URL = `/comments/show/${params.id}`
        try {
            let results = await axios.get(URL)
            this.setState({
                comments: results.data.payload
            })
        } catch (err) {
            console.log(err)
        }
    }

    makeNewComment = async (e) => {
        e.preventDefault()
        const { routeprops: { match:{ params } } } = this.props;
        const { user } = this.state
        
        const URL = `/comments/new/${user.id}/${params.id}`

        try {
            await axios.post(URL, { comment_body: this.state.comment_body })
            this.setState({
                comment_body: ''
            })
        } catch (err) {
            console.log(err)
        }
        this.getComments()
    }

    getWatchers = async () => {
        const { routeprops: { match:{ params } } } = this.props;
        const URL = `/shows/watchlist/watchers/${params.id}`
        try {
           let watchers = await axios.get(URL)
           this.setState({ watchers: watchers.data.payload })
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        const { user, show, comment_body, comments, watchers } = this.state
        const commentComponents = []
        
        comments.forEach(comment => {
            commentComponents.unshift(
                <div>
                    <img src={user.avatar_url} width='100' />
                    <b>{user.username}: </b>
                    {comment.comment_body}
                </div>
            )
        })
        const watcherComponents = []
        watchers.forEach(watcher => {
            watcherComponents.push(
                <Link to={`/user/${user.id}`}>
                    <img className='watcher' src={watcher.avatar_url} width='50'/>
                </Link>
            )
        })
        return (
            <div className='main'>
                <h2>{show.title}</h2>
                <img src={show.img_url} height='200' />
                <h4>Currently Watching</h4>
                {watcherComponents}
                <h4>Comments</h4>
                <form onSubmit={this.makeNewComment}>
                    <input type='text' value={comment_body} onChange={this.handleChange} placeholder='Make comment' />
                    <input type='submit' value='submit' />
                </form>
                {commentComponents}
            </div>
        )
    }
}

export default ShowPage