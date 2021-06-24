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

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home);