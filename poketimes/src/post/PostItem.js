import React, { Component } from 'react';

class PostItem extends Component {
    render() {
        const {
            post
        } = this.props;
        return (
            <div className="post card" key={post.id}>
                <div className="card-content">
                    <span className="card-title">{post.title}</span>
                    <p className="card-description">{post.body}</p>
                </div>
            </div>
        );
    }
}
export default PostItem;