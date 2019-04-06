import React, { Component } from 'react';

class Projects extends Component {
    render() {
        return (
            <div>
                {this.props.projects.map((project, idx) => {
                    return (
                        <div key={idx} className="row">
                            <div className="col col-lg-12">
                                <div className="card shadow sm project-item">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col col-lg-2">
                                                <img className=""
                                                    src={project.thumbnail} alt={project.name + " Image"} />
                                            </div>
                                            <div className="col col-lg-10">
                                                <div className="row">
                                                    <div className="col col-lg-12">
                                                        <h4>{project.name}</h4>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col col-lg-12">
                                                    <p>{project.summary}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Projects;