import React from 'react';
import { images } from '../../Constants/images';
import Footer from '../../components/Footer';
import './style.scss'

const ServiceDetails = () => {
    return (
        <>
            <section className="service-details-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 service-details-wrapper">
                            <div className="service-details">
                                <div className="row">
                                    <div className="col-md-6 service-left">
                                        <div className="left-details">
                                            <img src={images.detailing1} className="" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 service-right">
                                        <div className="right-details">
                                            <h2>Auto Repairing</h2>
                                        </div>
                                    </div>
                                    <div className="col-12 service-bottom">
                                        <div className="bottom-details">
                                            <h3>Service Details</h3>
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia iure corrupti impedit optio debitis quod consectetur eligendi cupiditate magnam explicabo quia beatae, veritatis fugiat hic consequuntur fuga molestiae exercitationem dolorem!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};
export default ServiceDetails;
