import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import { deletePost } from '../actions/PostAction';

class PostDetails extends Component {
    // state = {
    //     post: null,
    //     error: "Loading Post....."
    // }

    // componentDidMount() {
    //     console.log(this.props);
    //     let id = this.props.match.params.post_id
    // axios
    //     .get("https://jsonplaceholder.typicode.com/posts/" + id)
    //     .then(response => {
    //         console.log(response);
    //         if (response.status === 200) {
    //             this.setState({
    //                 post: response.data,
    //                 error:""
    //             })
    //         } else {
    //             this.setState({
    //                 post: null,
    //                 error:response.error.toString()
    //             })
    //         }
    //     }).catch(error=>{
    //         console.log(error);
    //         this.setState({
    //             post: null,
    //             error:error.toString()
    //         })
    //     });
    // }
    deletePost = (id) => {
        console.log('Delete Id :' + id);
        this.props.deletePost(id);
        this.props.history.push('/');
    }
    render() {
        const post = this.props.post;
        return (
            <div className="container">
                {
                    post ? (
                        <div className="post container">
                            <h4 className="center">{post.title} </h4>
                            <p className="card-description">{post.body}</p>
                            <div className="center">
                                <button className="btn grey" onClick={() => { this.deletePost(post.id) }}>Delete Post</button>
                            </div>
                        </div>
                    ) : (
                        <div className="center">
                            <p>Loading Post.....</p>
                        </div>
                    )
                }
            </div>
        );
    }
}

//get data 
const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id
    let post = state.posts.find(post => {
        return post.id == id
    });
    console.log(id);
    console.log(post);
    return {
        post: post
    }
}

//Delete data 
const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => {
            dispatch(deletePost(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);