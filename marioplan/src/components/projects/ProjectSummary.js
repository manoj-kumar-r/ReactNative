import React, { Component } from 'react'

class ProjectSummary extends Component {
    render() {
        const { project } = this.props;
        return (
            <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{project.title}</span>
                    <p>Posted by:</p>
                    <p className='grey-text'>3rd Sept, 2am.</p>
                </div>
            </div>
        );
    }
}
export default ProjectSummary;