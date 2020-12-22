import React from 'react';



class NavBar extends React.Component {


    render() {
        return (
            <div id="nav-container">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#top-container">JL</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#about-container">About </a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Projects</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#"> Experience</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#"> Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavBar