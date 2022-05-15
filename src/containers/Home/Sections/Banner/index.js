import SimpleSlider from '../../../../components/Slider';
import React from 'react';
import './style.scss';
const Banner = () => {
    return (
        <>
            <SimpleSlider>
                <section className="banner-section banner-section-1">
                    <div className="container">
                        <div className="col-md-6">
                            <h1>Professional auto service at affordable prices</h1>
                            <h2>
                                Have your work done here and you’ll never go anywhere else
                                again. Have your work done here and you’ll never go anywhere
                                else again.
                            </h2>
                        </div>
                    </div>
                </section>
                <section className="banner-section banner-section-2">
                    <div className="container">
                        <div className="col-md-6">
                            <h1>Introducing Interior Detailing and Washing Now</h1>
                            <h2>
                                Have your work done here and you’ll never go anywhere else
                                again. Have your work done here and you’ll never go anywhere
                                else again.
                            </h2>
                        </div>
                    </div>
                </section>
                <section className="banner-section banner-section-3">
                    <div className="container">
                        <div className="col-md-6">
                            <h1>Professional auto service at affordable prices</h1>
                            <h2>
                                Have your work done here and you’ll never go anywhere else
                                again. Have your work done here and you’ll never go anywhere
                                else again.
                            </h2>
                        </div>
                    </div>
                </section>
                <section className="banner-section banner-section-4">
                    <div className="container">
                        <div className="col-md-6">
                            <h1>Professional auto service at affordable prices</h1>
                            <h2>
                                Have your work done here and you’ll never go anywhere else
                                again. Have your work done here and you’ll never go anywhere
                                else again.
                            </h2>
                        </div>
                    </div>
                </section>
            </SimpleSlider>
        </>
    );
};

export default Banner;
