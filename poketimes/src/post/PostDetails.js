import React, { Component } from 'react';
import axios from 'axios';

class PostDetails extends Component {
    state = {
        post: null
    }

    componentDidMount() {
        console.log(this.props);
        let id = this.props.match.params.post_id
        axios
            .get("https://jsonplaceholder.typicode.com/posts/" + id)
            .then(response => {
                console.log(response);
                if (response.status == 200) {
                    this.setState({
                        post: response.data
                    })
                } else {
                    this.setState({
                        post: null
                    })
                }
            });
    }

    render() {
        const postItem = this.state.post ? (
            <div className="post">
                <h4 className="center">{this.state.post.title} </h4>
                <p className="card-description">{this.state.post.body}</p>
            </div>
        ) : (
            <div className="center">
                <p>Loading Post.....</p>
            </div>
        )
        return (
            <div className="container">
                {postItem}
            </div>
        );
    }
}

export default PostDetails;