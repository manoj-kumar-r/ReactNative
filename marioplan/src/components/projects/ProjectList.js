import React, { Component } from 'react'
import ProjectSummary from './ProjectSummary';

class ProjectList extends Component {
    render() {
        const { projects } = this.props;
        return (
            <div className="project list secttion">
                {
                    projects.map(project => {
                        return <ProjectSummary project={project} />
                    })
                }
            </div>
        );
    }
}
export default ProjectList;