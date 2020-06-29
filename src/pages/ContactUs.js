import React from 'react';

class ContactUs extends React.Component {
    render() {
        return (
            <main>
                <section className="section parallax effect-section contact-us-background">
                    <div className="mask dark-bg opacity-4"></div>
                    <div className="container position-relative">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-lg-8 text-center">
                                <h1 className="display-4 white-color m-0px">Contact Us</h1>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section gray-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 m-15px-tb">
                                <div className="box-shadow p-65px-tb p-40px-lr hover-top white-bg">
                                    <div className="m-30px-b only-icon-70 theme-color"></div>
                                    <div className="batas"><img alt="" className="gambar-icon" src={require("../assets/img/contact1.png")} title="" />
                                    </div>
                                    <h5 className="m-15px-b">HQ Address</h5>

                                    <p className="m-0px">Jl. Prof. Eyckman no.28 paviliun, Bandung, West Java, Indonesia. 40163</p>
                                </div>
                            </div>

                            <div className="col-lg-4 m-15px-tb">
                                <div className="box-shadow p-65px-tb p-40px-lr hover-top white-bg">
                                    <div className="m-30px-b only-icon-70 theme-color"></div>
                                    <div className="batas"><img alt="" className="gambar-icon" src={require("../assets/img/contact2.png")} title="" />
                                    </div>
                                    <h5 className="m-15px-b">Contact Us</h5>

                                    <p className="m-0px">+62&nbsp;81389007338</p>
                                </div>
                            </div>

                            <div className="col-lg-4 m-15px-tb">
                                <div className="box-shadow p-65px-tb p-40px-lr hover-top white-bg">
                                    <div className="m-30px-b only-icon-70 theme-color"></div>
                                    <div className="batas"><img alt="" className="gambar-icon" src={require("../assets/img/contact3.png")} title="" />
                                    </div>
                                    <h5 className="m-15px-b">Email Us</h5>

                                    <p className="m-0px links-dark"><a href="mailto:support@kadosoft.co.id
                                ">support@kadosoft.co.id</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="section">
                    <div className="container">
                        <div className="row md-m-25px-b m-40px-b justify-content-center">
                            <div className="col-lg-7 text-center">
                                <h3 className="h1 m-15px-b p-15px-b after-50 theme-after">Get in touch!</h3>

                                <p className="m-0px font-2">Want to know more? Let&rsquo;s discuss your needs to discover the best
							solution.</p>
                            </div>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-md-10 col-lg-9 col-xl-8">
                                <form action="static/plugin/mail/bat/rd-mailform.php" className="rd-mailform"
                                    data-form-output="form-output-global" data-form-type="contact" method="post">
                                    <div className="form-row">
                                        <div className="col-sm-6">
                                            <div className="form-group"><label>Your Name</label> <input
                                                className="form-control" data-constraints="@Required" id="contact-name"
                                                name="name" placeholder="Rachel Roth" type="text" /></div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="form-group"><label>Email Address</label> <input
                                                className="form-control" data-constraints="@Required" id="contact-email"
                                                name="email" placeholder="name@example.com" type="email" /></div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="form-group"><label >Company (optional)</label>
                                                <input className="form-control" id="contact-company" name="contact-company"
                                                    type="text" /></div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="form-group"><label >Phone (optional)</label> <input
                                                className="form-control" id="contact-phone" name="contact-phone" type="tel" />
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="form-group"><label >Message</label><textarea
                                                className="form-control" data-constraints="@Required" id="contact-message"
                                                name="message" placeholder="Hi there, I would like to ..."
                                                rows="3"></textarea></div>
                                        </div>

                                        <div className="col-12"><button className="m-btn m-btn-theme m-btn-radius w-100" name="send"
                                            type="submit">Get Started</button>

                                            <div className="snackbars" id="form-output-global"></div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="map-sm">
                    <div className="embed-responsive embed-responsive-16by9 h-100">
                        <div style={{ width: "100%" }}><iframe title="KadoSoft Headquarter" frameBorder="0" height="600" marginHeight="0" marginWidth="0"
                            scrolling="no"
                            src="https://maps.google.com/maps?q=Jl.%20Prof.%20Eyckman%20No.28P%2C%20Pasteur%2C%20Kec.%20Sukajadi%2C%20Kota%20Bandung%2C%20Jawa%20Barat%2040161%2C%20Indonesia&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            width="100%">Google Maps radius calculator</iframe></div>
                    </div>
                </div>
            </main>
        )
    }
}

export default ContactUs;
