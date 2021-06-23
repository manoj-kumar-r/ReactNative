import React, { Component } from 'react';
import axios from 'axios';

class PostDetails extends Component {
    state = {
        post: null,
        error:"Loading Post....."
    }

    componentDidMount() {
        console.log(this.props);
        let id = this.props.match.params.post_id
        axios
            .get("https://jsonplaceholder.typicode.com/posts/" + id)
            .then(response => {
                console.log(response);
                if (response.status === 200) {
                    this.setState({
                        post: response.data,
                        error:""
                    })
                } else {
                    this.setState({
                        post: null,
                        error:response.error.toString()
                    })
                }
            }).catch(error=>{
                console.log(error);
                this.setState({
                    post: null,
                    error:error.toString()
                })
            });
    }

    render() {
        const postItem = this.state.post ? (
            <div className="post container">
                <h4 className="center">{this.state.post.title} </h4>
                <p className="card-description">{this.state.post.body}</p>
            </div>
        ) : (
            <div className="center">
                <p>{this.state.error}</p>
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