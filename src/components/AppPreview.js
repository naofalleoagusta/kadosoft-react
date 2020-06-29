import React from "react";
import NavLink from './NavLink';

const AppPreview = (props) => {
    return (
        <div className="grid-item product branding">
            <div className="portfolio-box-01">
                <div className="portfolio-info">
                    <h5><NavLink href="/" className="p-0">Momb ios App</NavLink></h5>
                    <span>Broadcasting ios App</span>
                    <div>
                        <NavLink href="/" className="m-link-white gallery-link view-app">
                            View
                    </NavLink>
                    </div>
                </div>
                <div className="portfolio-img">
                    <img src={require("../assets/img/1000x1000.jpg")} title="" alt="" />
                </div>
            </div>
        </div>);
}


export default AppPreview;