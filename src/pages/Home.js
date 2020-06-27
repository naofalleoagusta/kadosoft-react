import React from 'react';

class Home extends React.Component {

    render() {
        return (
            <main>
                <section class="theme-g-bg effect-section">
                    <div class="container">
                        <div class="row align-items-center p-100px-t justify-content-center">
                            <div class="col-lg-6 m-50px-tb">
                                <h6 class="dark-bg p-5px-tb p-15px-lr d-inline-block white-color border-radius-15 m-25px-b">
                                    Featured Services</h6>

                                <h1 class="display-4 m-20px-b ">Digital solution for your business</h1>

                                <p class="font-2">Transform your business, scale up and win the competition in digital era.</p>

                                <div class="p-20px-t m-btn-wide"><a class="m-btn m-btn-radius m-btn-orange m-10px-r"
                                    href="#"><span class="m-btn-inner-text">Get Started</span> </a></div>
                            </div>

                            <div class="col-lg-6">

                            </div>
                        </div>
                    </div>
                </section>

                <section class="section effect-section">
                    {/* <div class="effect-2"><img alt="" class="svg_img gray-color" src={require("../assets/img/effect/style-1.svg")} title="" />
                    </div> */}

                    <div class="container">
                        <div class="row justify-content-center md-m-25px-b m-40px-b">
                            <div class="col-lg-8 text-center">
                                <h3 class="h1 m-15px-b">Build your e-commerce platform</h3>

                                <p class="m-0px font-2">Reach greater market, get more leads.</p>
                            </div>
                        </div>

                        <div class="row justify-content-between">
                            <div class="col-lg-6 m-15px-tb"><img alt="" class="" src={require("../assets/img/wedo-new.png")} title="" /></div>

                            <div class="col-lg-5 m-15px-tb">
                                <div class="media box-shadow-lg p5 m-30px-b">
                                    <div class="batas"><img alt="" class="gambar-icon" src={require("../assets/img/wedo1.png")} title="" />
                                    </div>
                                    <div class="media-body p-15px-l">
                                        <h5>Website</h5>

                                        <p class="m-0px">Desktop version for suitable shopping experience</p>
                                    </div>
                                </div>

                                <div class="media box-shadow-lg p5 m-30px-b">
                                    <div class="batas"><img alt="" class="gambar-icon" src={require("../assets/img/wedo2.png")} title="" />
                                    </div>
                                    <div class="media-body p-15px-l">
                                        <h5>Mobile Apps</h5>

                                        <p class="m-0px">Build Android &amp; IOS apps for mobile users</p>
                                    </div>
                                </div>

                                <div class="media box-shadow-lg p5">
                                    <div class="batas"><img alt="" class="gambar-icon" src={require("../assets/img/wedo3.png")} title="" />
                                    </div>
                                    <div class="media-body p-15px-l">
                                        <h5>Admin Panel</h5>

                                        <p class="m-0px">User friendly admin to manage business</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="section p-50px-t">
                    <div class="container">
                        <div class="row justify-content-center md-m-25px-b m-40px-b">
                            <div class="col-lg-8 text-center">
                                <h3 class="h1 m-15px-b">Service Excellence</h3>

                                <p class="m-0px font-2">Our dedicated service to build your system</p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-sm-6 col-lg-3 m-15px-tb">
                                <div class="p-40px-tb p-20px-lr text-center border-radius-10 hover-top box-shadow-lg">
                                    <div class="batas"><img alt="" class="gambar-icon" src={require("../assets/img/value1.png")} title="" />
                                    </div>

                                    <h7>Well Documented</h7>

                                    <p class="m-0px"></p>
                                </div>
                            </div>

                            <div class="col-sm-6 col-lg-3 m-15px-tb">
                                <div class="p-40px-tb p-20px-lr text-center border-radius-10 hover-top box-shadow-lg">
                                    <div class="batas"><img alt="" class="gambar-icon" src={require("../assets/img/value2.png")} title="" />
                                    </div>

                                    <h7>24/7 IT Support</h7>

                                    <p class="m-0px"></p>
                                </div>
                            </div>

                            <div class="col-sm-6 col-lg-3 m-15px-tb">
                                <div class="p-40px-tb p-20px-lr text-center border-radius-10 hover-top box-shadow-lg">
                                    <div class="batas"><img alt="" class="gambar-icon" src={require("../assets/img/value3.png")} title="" />
                                    </div>

                                    <h7>User Friendly System</h7>

                                    <p class="m-0px"></p>
                                </div>
                            </div>

                            <div class="col-sm-6 col-lg-3 m-15px-tb">
                                <div class="p-40px-tb p-20px-lr text-center border-radius-10 hover-top box-shadow-lg">
                                    <div class="batas"><img alt="" class="gambar-icon" src={require("../assets/img/value4.png")} title="" />
                                    </div>

                                    <h7>Secured &amp; Reliable Technology</h7>

                                    <p class="m-0px"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="section gray-bg">
                    <div class="container">
                        <div class="row md-m-25px-b m-40px-b justify-content-center">
                            <div class="col-lg-8 text-center">
                                <h3 class="h1 m-15px-b p-15px-b after-50 theme-after">Best solution</h3>
                                <p class="m-0px font-2">
                                    Our platform for any businesses, fashion, food, retail and many more.
                                </p>
                            </div>
                        </div>

                        <div class="portfolio-filter-01 m-15px-t m-20px-b md-m-10px-b">
                            <ul class="filter justify-content-center nav">
                                <li class="active" data-filter="*">All</li>
                                <li data-filter=".branding">Mob App</li>
                                <li data-filter=".photoshop">Web</li>
                                <li data-filter=".fashion">Custom</li>
                            </ul>
                        </div>

                        <div class="portfolio-content grid-gutter-lg grid-col-3 lightbox-gallery">
                            <div class="grid-item product fashion">
                                <div class="portfolio-box-01">
                                    <div class="portfolio-info">
                                        <h5><a href="#">Momb ios App</a></h5>
                                        <span>Broadcasting ios App</span>

                                        <div class="btn-bar"><a class="m-link-white gallery-link"
                                            href="../assets/img/1000x1000.jpg">View </a></div>
                                    </div>

                                    <div class="portfolio-img"><img alt="" src={require("../assets/img/1000x1000.jpg")} title="" /></div>
                                </div>
                            </div>

                            <div class="grid-item branding fashion">
                                <div class="portfolio-box-01">
                                    <div class="portfolio-info">
                                        <h5><a href="#">Momb ios App</a></h5>
                                        <span>Broadcasting ios App</span>

                                        <div class="btn-bar"><a class="m-link-white gallery-link"
                                            href="../assets/img/1000x1000.jpg">View </a></div>
                                    </div>

                                    <div class="portfolio-img"><img alt="" src={require("../assets/img/1000x1000.jpg")} title="" /></div>
                                </div>
                            </div>

                            <div class="grid-item branding photoshop">
                                <div class="portfolio-box-01">
                                    <div class="portfolio-info">
                                        <h5><a href="#">Momb ios App</a></h5>
                                        <span>Broadcasting ios App</span>

                                        <div class="btn-bar"><a class="m-link-white gallery-link"
                                            href="../assets/img/1000x1000.jpg">View </a></div>
                                    </div>

                                    <div class="portfolio-img"><img alt="" src={require("../assets/img/1000x1000.jpg")} title="" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="parallax effect-section p-40px-tb" styles={{ backgroundImage: `url(./../assets/img/about-us.jpg)` }}>
                    <div class="mask black-bg opacity-8"></div>

                    <div class="container position-relative">
                        <div class="row align-items-center">
                            <div class="col-lg-8 col-md-7 m-15px-tb text-md-left text-center">
                                <h3 class="white-color m-0px">Need custom solution system for enterprise?</h3>
                            </div>

                            <div class="col-lg-4 col-md-5 m-15px-tb text-md-right text-center"><a
                                class="m-btn m-btn-t-white m-btn-radius" href="#">Chat with us <i class="fa fa-whatsapp"
                                    styles={{ paddingLeft: `10px`, fontSize: `24px` }}></i> </a></div>
                        </div>
                    </div>
                </section>
                <section class="section bg-no-repeat bg-right-center" styles={{ backgroundImage: `url(../assets/img/about-us.png)` }}>
                    <div class="container">
                        <div class="row md-m-25px-b m-40px-b">
                            <div class="col-lg-8">
                                <h3 class="h1 m-15px-b">Reach out now!</h3>

                                <p class="m-0px font-2">Want to know more? Let&rsquo;s discuss your needs to discover the best
                        solution.</p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-6 m-15px-tb">
                                <form action="../assets/plugin/mail/bat/rd-mailform.php" class="rd-mailform"
                                    data-form-output="form-output-global" data-form-type="contact" method="post">
                                    <div class="form-row">
                                        <div class="col-sm-6">
                                            <div class="form-group"><input class="form-control" data-constraints="@Required"
                                                id="contact-name" name="name" placeholder="Name" type="text" /></div>
                                        </div>

                                        <div class="col-sm-6">
                                            <div class="form-group"><input class="form-control" data-constraints="@Required"
                                                id="contact-email" name="email" placeholder="name@example.com"
                                                type="email" /></div>
                                        </div>

                                        <div class="col-sm-12">
                                            <div class="form-group"><input class="form-control" data-constraints="@Required"
                                                id="contact-subject" name="subject" placeholder="Subject" type="text" />
                                            </div>
                                        </div>

                                        <div class="col-12">
                                            <div class="form-group"><textarea class="form-control" data-constraints="@Required"
                                                id="contact-message" name="message"
                                                placeholder="Hi there, I would like to ..." rows="3"></textarea></div>
                                        </div>

                                        <div class="col-12"><button class="m-btn m-btn-theme m-btn-radius w-100" name="send"
                                            type="submit">Get Started</button>

                                            <div class="snackbars" id="form-output-global"></div>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div class="col-lg-5 m-15px-tb ml-auto">
                                <h5 class="m-20px-b body-color">Let&#39;s talk!</h5>

                                <div class="h1 theme-color"></div>

                                <div class="media align-items-center p-10px-tb">
                                    <div class="icon-40 theme-bg-alt border-radius-50 theme-color"></div>

                                    <div class="media-body p-15px-l">
                                        <h6 class="h4 m-0px">081389007338</h6>
                                    </div>
                                </div>

                                <div class="media align-items-center p-10px-tb">
                                    <div class="icon-40 theme-bg-alt border-radius-50 theme-color"></div>

                                    <div class="media-body p-15px-l">
                                        <h6 class="h4 m-0px">support@kadosoft.co.id</h6>
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

export default Home;
