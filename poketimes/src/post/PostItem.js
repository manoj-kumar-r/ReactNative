import React, { Component } from 'react';

class PostItem extends Component {
    render() {
        const {
            post,
            onPostClicked
        } = this.props;

        return (
            <div className="post card" key={post.id} onClick={() => { onPostClicked(post.id) }}>
                <div className="card-content">
                    <span className="card-title">{post.title}</span>
                    <p className="card-description">{post.body}</p>
                </div>
            </div>
        );
    }
}
export default PostItem;