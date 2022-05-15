import TeamSlider from '../../../../components/TeamSlider';
import { images } from '../../../../Constants/images';
import React from 'react';
import './style.scss';
const About = () => {
    return (
        <>
            <section className="about-section">
                <h2 className="text-center">About Us</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 about-left">
                            <div className="about-left-content">
                                <h3>Bismillah Car AC and Interior Detailing</h3>
                                <p className="about-para">
                                    Our effortless team works day and night to make your life
                                    comfortable and productive. Our experienced and hardworking
                                    team members work professionally to make your journey easier
                                    and safer for you.
                                </p>
                                <p className="about-para">
                                    Our effortless team works day and night to make your life
                                    comfortable and productive. Our experienced and hardworking
                                    team members work professionally to make your journey easier
                                    and safer for you.
                                </p>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="about-content">
                                        <h3>25+</h3>
                                        <p className="content">Years of Experience</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="about-content">
                                        <h3>1000+</h3>
                                        <p className="content">Customers</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="about-content">
                                        <h3>02</h3>
                                        <p className="content">Branches</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="about-content">
                                        <h3>10</h3>
                                        <p className="content">Companies</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="about-right">
                                <div className="right-img">
                                    <img
                                        src={images.owners}
                                        className="img-fluid"
                                        alt="About Pic"
                                    />
                                </div>
                                <div className="right-content">
                                    <h4>
                                        Co-Founder: <br /> Muhammad Saleem <br /> Muhammad Naeem
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12"></div>
                    </div>
                    <h2 className="mt-4 mb-0">Meet Our Team</h2>
                    <div className="row">
                        <div className="col-md-5 team-details">
                            <h3>
                                We Laugh <br /> <span>Together </span> ,
                            </h3>
                            <h3>
                                We Work <br /> <span>Together </span>
                            </h3>
                        </div>
                        <div className="col-md-7 team-slider">
                            <TeamSlider>
                                <div className="team-img">
                                    <img src={images.member1} alt="" className="img-fluid" />
                                </div>
                                <div className="team-img">
                                    <img src={images.member2} alt="" className="img-fluid" />
                                </div>
                                <div className="team-img">
                                    <img src={images.member1} alt="" className="img-fluid" />
                                </div>
                                <div className="team-img">
                                    <img src={images.member2} alt="" className="img-fluid" />
                                </div>
                                <div className="team-img">
                                    <img src={images.member1} alt="" className="img-fluid" />
                                </div>
                                <div className="team-img">
                                    <img src={images.member2} alt="" className="img-fluid" />
                                </div>
                            </TeamSlider>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
