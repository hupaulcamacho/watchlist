import React, { Component } from 'react'
import axios from 'axios'
class ShowPage extends Component {
    state = {
        show: {},
        comments: []
    }

    componentDidMount = () => {
        this.getShow()
        this.getComments()
    }

    getShow = async () => {
        const { match: { params } } = this.props;
        const URL = `http://localhost:3100/shows/${params.id}`
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
        const { match: { params } } = this.props;
        const URL = `http://localhost:3100/comments/show/${params.id}`
        try {
            let results = await axios.get(URL)
            this.setState({
                comments: results.data.payload
            })
        } catch (err) {
            console.log(err)
        }
    }

    makeNewComment = async () => {
        
    }

    render() {
        const { show } = this.state
        return (
            <div>
                <h3>{show.title}</h3>
                <img src={show.img_url} height='200' />
            </div>
        )
    }
}

export default ShowPage