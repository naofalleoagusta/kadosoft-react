import React from 'react';
import AppPreview from '../components/AppPreview';


class Catalog extends React.Component {
    render() {
        return (
            <main>
                <section className="section parallax effect-section catalog-background">
                    <div className="mask dark-bg opacity-4"></div>
                    <div className="container position-relative">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-lg-10 text-center">
                                <h1 className="display-4 white-color m-0px">Product Catalog</h1>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section gray-bg">
                    <div className="container">
                        <div className="portfolio-filter-01">
                            <ul className="filter justify-content-center nav m-15px-b">
                                <li className="active" data-filter="*">All</li>
                                <li data-filter=".branding">Web Dev</li>
                                <li data-filter=".photoshop">E-Commerce</li>
                                <li data-filter=".fashion">Social Media</li>
                            </ul>
                        </div>
                        <div className="portfolio-content grid-gutter-lg grid-col-3 lightbox-gallery">
                            <AppPreview />
                            <AppPreview />
                            <AppPreview />
                            <AppPreview />
                            <AppPreview />
                            <AppPreview />
                            <AppPreview />
                            <AppPreview />
                            <AppPreview />
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}

export default Catalog;
