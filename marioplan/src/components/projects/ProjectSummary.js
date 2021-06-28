import React, { Component } from 'react'
import moment from 'moment'

class ProjectSummary extends Component {
    render() {
        const { project } = this.props;
        return (
            <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{project.title}</span>
                    <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
                    <p className='grey-text'>
                        <div>{moment(project.createdAt.toDate()).calendar()}</div>
                    </p>
                </div>
            </div>
        );
    }
}
export default ProjectSummary;