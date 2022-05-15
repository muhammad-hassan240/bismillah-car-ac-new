import { images } from '../../../../Constants/images';
import React from 'react';
import Logos from './logos';
import './style.scss';

const CompanyLogos = () => {
    const honda = [
        {
            src: images.honda,
            title: 'Honda'
        }
    ]
    const toyota = [
        {
            src: images.toyota,
            title: 'Toyota'
        }
    ]
    const suzuki = [
        {
            src: images.suzuki,
            title: 'Suzuki'
        }
    ]
    const mercedes = [
        {
            src: images.mercedes,
            title: 'Mercedes'
        }
    ]
    const audi = [
        {
            src: images.audi,
            title: 'Audi'
        }
    ]
    const hyundai = [
        {
            src: images.hyundai,
            title: 'Hyundai'
        }
    ]

    return (
        <>
            <section className="company-logos-section">
                <div className="container-fluid">
                    <div className="company-logos">
                        <Logos logos={honda} />
                        <Logos logos={toyota} />
                        <Logos logos={suzuki} />
                        <Logos logos={mercedes} />
                        <Logos logos={audi} />
                        <Logos logos={hyundai} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default CompanyLogos;
