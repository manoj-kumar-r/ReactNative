import React, { Component } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import PokeBall from '../pokeball.png';
import { connect } from 'react-redux';

class Home extends Component {
    // state = {
    //     posts: []
    // }
    // componentDidMount() {
    // axios
    //     .get("https://jsonplaceholder.typicode.com/posts")
    //     .then(response => {
    //         console.log(response);
    //         this.setState({
    //             posts: response.data.slice(0, 10)
    //         })
    //     });
    // }

    deletePost = (id) => {
        console.log('Delete Id :'+id);
        this.props.deletePost(id);
    }
    render() {
        console.log(this.props);
        const { posts } = this.props;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id} >
                        <img src={PokeBall} alt="A Poke Ball" />
                        <div className="card-content" >
                            <Link to={'/postdetails/' + post.id} >
                                <span className="card-title red-text" > {post.title} </span>
                            </Link>
                            <p className="gray-text" > {post.body} </p>
                            <div className="center">
                                <button className="btn grey" onClick={() => { this.deletePost(post.id) }}>Delete Post</button>
                            </div>
                        </div>
                    </div>
                );
            })
        ) : (
            <h1 className="center" > No Posts Yet </h1>
        );
        return (
            <div>
                <div className="container home" >
                    <h1 className="center" > Home </h1>
                    <div > {postList} </div>
                </div>
            </div>
        );
    }
}

//Read data 
const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

//Delete data 
const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => {
            dispatch({
                type: 'DELETE_POST',
                id: id
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);