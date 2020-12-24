import React from 'react';



class NavBar extends React.Component {


    render() {
        return (
            <div id="nav-container">
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#top-container">JL</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>


                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active" href="#About-Component">About</a>
                                </li>
                                <li class="nav-item active">
                                    <a class="nav-link" href="#project-container">Projects</a>
                                </li>
                                <li class="nav-item active">
                                    <a class="nav-link" href="#experience-container"> Experience</a>
                                </li>
                                <li class="nav-item active">
                                    <a class="nav-link" href="#"> Contact</a>
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