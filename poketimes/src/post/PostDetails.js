import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';

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

    render() {
        const post = this.props.post;
        return (
            <div className="container">
                {
                    post ? (
                        <div className="post container">
                            <h4 className="center">{post.title} </h4>
                            <p className="card-description">{post.body}</p>
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

export default connect(mapStateToProps)(PostDetails);