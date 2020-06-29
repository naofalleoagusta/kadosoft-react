import React from 'react';

class AboutUs extends React.Component {
    render() {
        return (
            <main>
                <section className="section parallax effect-section about-us-background">
                    <div className="mask dark-bg opacity-4"></div>
                    <div className="container position-relative">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-lg-8 text-center">
                                <h1 className="display-4 white-color m-0px">About Us</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section gray-bg">
                    <div className="container">
                        <div className="row">
                            <div className="row justify-content-center md-m-25px-b m-40px-b">
                                <div className="col-lg-8 text-center">
                                    <h3 className="h1 m-15px-b">Who We Are</h3>
                                    <p className="m-0px font-2">KadoSoft is a software company that help people transforming their business in Digital Economy era. Our mission is empowering business by providing software & e-commerce solution with cutting edge technology.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 m-15px-tb">
                                <div className="box-shadow p-65px-tb p-45px-lr hover-top white-bg">
                                    <div className="m-30px-b icon-70">
                                        <img src={require("../assets/img/about3.png")} title="" alt="" />
                                    </div>
                                    <h5 className="m-15px-b">Integrity </h5>
                                    <p className="m-0px">We are honest, open, trust in people, ethical, and fair.</p>
                                    <div className="p-25px-t">
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 m-15px-tb">
                                <div className="box-shadow p-65px-tb p-45px-lr hover-top white-bg">
                                    <div className="m-30px-b icon-70">
                                        <img src={require("../assets/img/about1.png")} title="" alt="" />
                                    </div>
                                    <h5 className="m-15px-b">Agility</h5>
                                    <p className="m-0px">We are perseverance, bold & fast, innovative, passionate to improve and change.</p>
                                    <div className="p-25px-t">
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 m-15px-tb">
                                <div className="box-shadow p-65px-tb p-45px-lr hover-top white-bg">
                                    <div className="m-30px-b icon-70">
                                        <img src={require("../assets/img/about2.png")} title="" alt="" />
                                    </div>
                                    <h5 className="m-15px-b">Client Success</h5>
                                    <p className="m-0px">Customer oriented solution.</p>
                                    <div className="p-25px-t">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="section">
                    <div className="container">
                        <div className="row separated">
                            <div className="col-6 col-lg-3">
                                <div className="md-p-20px p-40px text-center">
                                    <img src={require("../assets/img/react.png")} title="" alt="" />
                                </div>
                            </div>
                            <div className="col-6 col-lg-3">
                                <div className="md-p-20px p-40px text-center">
                                    <img src={require("../assets/img/kubernetes.png")} title="" alt="" />
                                </div>
                            </div>
                            <div className="col-6 col-lg-3">
                                <div className="md-p-20px p-40px text-center">
                                    <img src={require("../assets/img/graphql.png")} title="" alt="" />
                                </div>
                            </div>
                            <div className="col-6 col-lg-3">
                                <div className="md-p-20px p-40px text-center">
                                    <img src={require("../assets/img/node.png")} title="" alt="" />
                                </div>
                            </div>
                            <div className="col-6 col-lg-3">
                                <div className="md-p-20px p-40px text-center">
                                    <img src={require("../assets/img/psotgres.png")} title="" alt="" />
                                </div>
                            </div>
                            <div className="col-6 col-lg-3">
                                <div className="md-p-20px p-40px text-center">
                                    <img src={require("../assets/img/docker.png")} title="" alt="" />
                                </div>
                            </div>
                            <div className="col-6 col-lg-3">
                                <div className="md-p-20px p-40px text-center">
                                    <img src={require("../assets/img/flutter.png")} title="" alt="" />
                                </div>
                            </div>
                            <div className="col-6 col-lg-3">
                                <div className="md-p-20px p-40px text-center">
                                    <img src={require("../assets/img/github.png")} title="" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="section gray-bg">
                    <div className="container">
                        <div className="row md-m-25px-b m-40px-b justify-content-center">
                            <div className="col-lg-8 text-center">
                                <h6 className="theme-color">Our Team</h6>
                                <h3 className="h1 m-15px-b">Meet the Profesional </h3>
                                <p className="m-0px font-2">Our Business & Tech Professional work together and focus on accelerate growth</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 col-lg-3 m-15px-tb">
                                <div className="our-team">
                                    <div className="team-img black-after">
                                        <img src={require("../assets/img/1000x1000.jpg")} title="" alt="" />
                                        <div className="team-desc">

                                            <div className="social-icon si-30 white radius nav">
                                                <a href="/"><i className="fab fa-facebook-f"></i></a>
                                                <a href="/"><i className="fab fa-twitter"></i></a>
                                                <a href="/"><i className="fab fa-linkedin-in"></i></a>
                                                <a href="/"><i className="fab fa-instagram"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="team-info">
                                        <h6 className="m-5px-b">Suryatin Setiawan</h6>
                                        <p className="m-0px font-1">Founder Kadoqu Group</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3 m-15px-tb">
                                <div className="our-team">
                                    <div className="team-img black-after">
                                        <img src={require("../assets/img/1000x1000.jpg")} title="" alt="" />
                                        <div className="team-desc">
                                            <div className="social-icon si-30 white radius nav">
                                                <a href="/"><i className="fab fa-facebook-f"></i></a>
                                                <a href="/"><i className="fab fa-twitter"></i></a>
                                                <a href="/"><i className="fab fa-linkedin-in"></i></a>
                                                <a href="/"><i className="fab fa-instagram"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="team-info">
                                        <h6 className="m-5px-b">Ari Wibowo</h6>
                                        <p className="m-0px font-1">CEO KadoSoft</p>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-sm-6 col-lg-3 m-15px-tb">
                                <div className="our-team">
                                    <div className="team-img black-after">
                                        <img src="../assets/img/1000x1000.jpg" title="" alt="" />
                                        <div className="team-desc">

                                            <div className="social-icon si-30 white radius nav">
                                                <a href="/"><i className="fab fa-facebook-f"></i></a>
                                                <a href="/"><i className="fab fa-twitter"></i></a>
                                                <a href="/"><i className="fab fa-linkedin-in"></i></a>
                                                <a href="/"><i className="fab fa-instagram"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="team-info">
                                        <h6 className="m-5px-b">Michaela Sandra</h6>
                                        <p className="m-0px font-1">Head of Business</p>
                                    </div>
                                </div>
                            </div> */}
                            <div className="col-sm-6 col-lg-3 m-15px-tb">
                                <div className="our-team">
                                    <div className="team-img black-after">
                                        <img src={require("../assets/img/1000x1000.jpg")} title="" alt="" />
                                        <div className="team-desc">

                                            <div className="social-icon si-30 white radius nav">
                                                <a href="/"><i className="fab fa-facebook-f"></i></a>
                                                <a href="/"><i className="fab fa-twitter"></i></a>
                                                <a href="/"><i className="fab fa-linkedin-in"></i></a>
                                                <a href="/"><i className="fab fa-instagram"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="team-info">
                                        <h6 className="m-5px-b">Boediono</h6>
                                        <p className="m-0px font-1">Company Advisor</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}

export default AboutUs;
