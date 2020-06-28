import React from "react";
import NavLink from "./NavLink";


class Header extends React.Component {

    constructor(props) {
        super(props);
        this.listener = null;
        this.state = {
            status: "top",
        };
    }

    componentDidMount() {
        this.listener = document.addEventListener("scroll", e => {
            var scrolled = document.scrollingElement.scrollTop;
            if (scrolled >= 100) {
                if (this.state.status !== "not-top") {
                    this.setState({ status: "not-top" });
                }
            } else {
                if (this.state.status !== "top") {
                    this.setState({ status: "top" });
                }
            }
        });
    }

    componentDidUpdate() {
        document.removeEventListener("scroll", this.listener);
    }
    render() {
        let path = this.props.location.pathname;
        return (
            <header className={`${(path !== "/" && path !== "contact-us") && "header-height header-bg min-header"} header-nav header-dark ${this.state.status !== "top" && "fixed-header"}`}>
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
                                    <li className="nav-item"><NavLink className="nav-link" href="/service">Service</NavLink></li>
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
    }
}


export default Header;