import React, { Component } from 'react';
import Rainbow from '../hoc/Rainbow';
import axios from 'axios';
import PostItem from '../post/PostItem';

class Home extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                console.log(response);
                this.setState({
                    posts: response.data.slice(0, 10)
                })
            });
    }
    render() {
        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return <PostItem post={post} />;
            })
        ) : (
            <h1 className="center">No Posts Yet</h1>
        );
        return (
            <div>
                <div className="container">
                    <h1 className="center">Home</h1>
                    <div>{postList}</div>
                </div>
            </div>
        );
    }
}

export default Home;
