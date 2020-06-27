import React from "react";
import NavLink from "./NavLink";

const Header = (props) => {
    return (
        <header className="header-nav header-dark">
            <div className="fixed-header-bar">
                <div className="navbar navbar-main navbar-expand-lg">
                    <div className="container">
                        <NavLink href="/" className="px-0">
                            <img alt="" className="logo-header" src={require('./../assets/img/logo.png')} title="" />
                        </NavLink>
                        <button aria-controls="navbar-main-collapse"
                            aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler"
                            data-target="#navbar-main-collapse" data-toggle="collapse" type="button">
                        </button>
                        <div className="collapse navbar-collapse navbar-collapse-overlay" id="navbar-main-collapse">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item"><NavLink className="nav-link" href="/">Home</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link" href="service.html">Service</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link" href="catalog.html">Catalog</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link" href="about-us.html">About</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link" href="contact-us.html">Contact</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;