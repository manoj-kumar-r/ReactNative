import React, { Component } from 'react'
import ProjectSummary from './ProjectSummary';

export default class ProjectList extends Component {
    render() {
        return (
            <div className="project list secttion">
                 <ProjectSummary/>
                 <ProjectSummary/>
                 <ProjectSummary/>
                 <ProjectSummary/>
            </div>
        );
    }
}