import React from 'react';

function Header({ currentPage, handlePageChange }) {
    return (
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="home">E-shoppe</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarScroll">
                    <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ "--bs-scroll-height": "100px" }}>
                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Departments</a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item"
                                    href="#cats"
                                    onClick={() => handlePageChange('Cats')}
                                    className={currentPage === 'Cats' ? 'nav-link active' : 'nav-link'}
                                >
                                    Cats
                                </a>
                                </li>
                                <li><a class="dropdown-item"
                                    href="#dogs"
                                    onClick={() => handlePageChange('Dogs')}
                                    className={currentPage === 'Dogs' ? 'nav-link active' : 'nav-link'}
                                >
                                    Dogs
                                </a>
                                </li>
                                <li><a class="dropdown-item"
                                    href="#reptiles"
                                    onClick={() => handlePageChange('Reptiles')}
                                    className={currentPage === 'Reptiles' ? 'nav-link active' : 'nav-link'}
                                >
                                    Reptiles
                                </a>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;