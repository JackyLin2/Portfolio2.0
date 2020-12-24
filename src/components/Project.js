import React from 'react';


class Project extends React.Component {
    render() {
        return (
            <div id="project-container">
                <h3 className="project-header">Projects</h3>
                <div className="project-section">
                    <div id="project-slide" className="carousel slide" data-bs-ride="carousel" data-bs-pause="hover">
                        <div className="carousel-inner">
                            <div className="carousel-item active container-fluid">
                                <h3>Coming Soon</h3>
                            </div>
                            <div className="carousel-item">
                                <h3>Coming Soon</h3>
                            </div>
                            <div className="carousel-item">
                                <h3>Coming Soon</h3>
                            </div>
                        </div>
                        <a className="carousel-button carousel-control-prev" href="#project-slide" role="button" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        </a>
                        <a className="carousel-button carousel-control-next" href="#project-slide" role="button" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Project