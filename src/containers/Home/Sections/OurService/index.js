import React from 'react';
import ServiceCard from '../../../../components/ServiceCard';
import './style.scss';
const OurService = () => {
    return (
        <>
            <section className="service-section">
                <div className="container">
                    <h2 className="">Our Services</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <ServiceCard
                                heading="Auto Repairing"
                                icon="fal fa-car-mechanic icon"
                                content="Its not very easy to write about services when you don't know about the work that the other one is doing with great ease. "
                                to="services"
                            />
                        </div>
                        <div className="col-md-4">
                            <ServiceCard
                                heading="Auto Electrician"
                                icon="fal fa-user-hard-hat icon"
                                content="Its not very easy to write about services when you don't know about the work that the other one is doing with great ease. "
                                to="services"
                            />
                        </div>
                        <div className="col-md-4">
                            <ServiceCard
                                heading="Detailing"
                                icon="far fa-car-wash icon"
                                content="Its not very easy to write about services when you don't know about the work that the other one is doing with great ease. "
                                to="services"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default OurService;
