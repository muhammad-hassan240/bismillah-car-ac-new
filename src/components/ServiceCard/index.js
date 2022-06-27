import ALink from '../Alink';
import React from 'react';
import { Card } from 'react-bootstrap';
import serviceData from './serviceDetails';

const ServiceCard = () => {
    return (
        <>
            {serviceData.serviceDetail.map((item, i) => (
                <>
                    <div className="col-md-4">
                        <Card>
                            <Card.Body>
                                <Card.Title>{item.heading}</Card.Title>
                                <div className="service-icon">
                                    <span>
                                        <i className={item.icon}></i>
                                    </span>
                                </div>
                                <Card.Text>{item.content}</Card.Text>
                                <ALink to={item.link}>
                                    <button className="btn btn-primary">More Details</button>
                                </ALink>
                            </Card.Body>
                        </Card>
                    </div>
                </>
            )
            )}
        </>
    );
};

export default ServiceCard;
