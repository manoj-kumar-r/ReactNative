import React, { Component } from 'react'

class ProjectDetails extends Component {
    render() {
        const id = this.props.match.params.id;
        return (
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">{id} Project Title</span>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, distinctio non quod eveniet ipsa harum in ipsam error voluptatem perferendis a alias iure, sapiente nesciunt quae enim quidem. Autem, mollitia.</p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted By:</div>
                        <div>2nd Sepet, 2am</div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ProjectDetails;