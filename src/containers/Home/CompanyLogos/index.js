import React from 'react';
import LogosImg from './logos';
import './style.scss';

const CompanyLogos = () => {

    return (
        <>
            <section className="company-logos-section">
                <div className="container-fluid">
                    <div className="company-logos">
                        {LogosImg.level1.map((item, i) => (
                            <div key={i} className="logo-pic">
                                <img src={item.src} alt="logo" className="img-fluid" />
                                <h4>{item.title}</h4>
                            </div>
                        )
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default CompanyLogos;
