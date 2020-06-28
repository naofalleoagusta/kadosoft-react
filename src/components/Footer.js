
import React from "react";

const Footer = props => (
    <footer className="dark-bg footer">
        <div className="footer-top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="p-25px-b"><img alt="" className="logo-footer" src={require("../assets/img/logo.png")} title="" /></div>

                        <p className="white-color-light">KadoSoft is a software company that help people to transforming their business in Digital Economy era. Our mission is to empowering business by providing software &amp; e-commerce solution with cutting edge technology.</p>

                        <div className="social-icon si-30 white round nav"></div>
                    </div>

                    <div className="col-lg-2 col-4 col-sm-4 ml-lg-auto m-15px-tb">
                        <h5 className="white-color footer-title">Our Office</h5>

                        <div>
                            <p className="white-color-light">Headquarter Jl. Prof. Eyckman no.28 paviliun, Pasteur, West Java, Indonesia. 40163</p>
                        </div>

                        <ul className="list-unstyled links-white footer-link-1">
                        </ul>
                    </div>

                    <div className="col-lg-2 col-4 col-sm-4 m-15px-tb">
                        <h5 className="white-color footer-title">Link</h5>

                        <ul className="list-unstyled links-white footer-link-1">
                            <li><a href="about-us.html">About Us </a></li>
                            <li><a href="service.html">Service </a></li>
                            <li><a href="catalog.html">Catalog </a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className="footer-bottom border-style top light">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center text-md-right m-5px-tb">
                        <p className="m-0px font-small white-color-light">KadoSoft&copy; 2020 copyright all right reserved</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);


export default Footer;
