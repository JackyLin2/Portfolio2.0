import React from 'react';



class NavBar extends React.Component {


    render() {
        return (
            <div id="nav-container">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#top-container">JL</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>


                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#about-container">About</a>
                                </li>
                                <li className="nav-item active">
                                    <a className="nav-link" href="#project-container">Projects</a>
                                </li>
                                <li className="nav-item active">
                                    <a className="nav-link" href="#experience-container"> Experience</a>
                                </li>
                                <li className="nav-item active">
                                    <a className="nav-link" href="#Contact-container"> Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavBar