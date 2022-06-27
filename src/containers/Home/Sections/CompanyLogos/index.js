import { images } from '../../../../Constants/images';
import React from 'react';
import Logos from './logos';
import './style.scss';

const CompanyLogos = () => {
    const logosImg =  {
        level1:[
            {
                src: images.honda,
                title: 'Honda'
            },
            {
                src: images.toyota,
                title: 'Toyota'
            },
            {
                src: images.suzuki,
            title: 'Suzuki'
            },
            {
                src: images.mercedes,
                title: 'Mercedes'
            },
            {
                src: images.audi,
                title: 'Audi'
            },
            {
                src: images.hyundai,
                title: 'Hyundai'
            },
        ]
    }

    return (
        <>
            <section className="company-logos-section">
                <div className="container-fluid">
                    <div className="company-logos">
                        <Logos logos={logosImg.level1} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default CompanyLogos;
