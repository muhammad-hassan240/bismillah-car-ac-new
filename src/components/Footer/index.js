import React from 'react';
import './style.scss';
const Footer = () => {
    return (
        <>
            <section className="footer-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="text-center">Bismillah Car AC</h2>
                        </div>
                    </div>
                    <div className="row footer-row">
                        <div className="col-md-6 footer-left">
                            <div className="address">
                                <h3>
                                    <i className="fal fa-map-marked-alt"></i>
                                    Main Branch
                                </h3>
                                <p>
                                    Dubai Chowk AhmadPur Road Near <br /> Costa Corner, Bahawalpur
                                    (63100)
                                </p>
                            </div>
                            <div className="address">
                                <h3>
                                    <i className="fal fa-map-marked-alt"></i>
                                    Second Branch
                                </h3>
                                <p>
                                    Chikan Wala Chowk Multan Road Near <br /> Kebabish Nihari,
                                    Bahawalpur (63100)
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 footer-right">
                            <div className="social-links">
                                <ul className="list-unstyled">
                                    <li>
                                        <i className="fab fa-facebook"></i>
                                        <span className="social-name">Facebook</span>

                                    </li>
                                    <li>
                                        <i className="fab fa-instagram"></i>
                                        <span className="social-name">Instagram</span>

                                    </li>
                                    <li>
                                        <i className="fab fa-twitter"></i>
                                        <span className="social-name">Twitter</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Footer;
