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
                        <ServiceCard/>
                    </div>
                </div>
            </section>
        </>
    );
};

export default OurService;
