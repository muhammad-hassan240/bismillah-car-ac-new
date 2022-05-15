import ALink from '../Alink';
import React from 'react';
import { Card } from 'react-bootstrap';

const ServiceCard = props => {
    return (
        <>
            <Card>
                <Card.Body>
                    <Card.Title>{props.heading}</Card.Title>
                    <div className="service-icon">
                        <span>
                            {' '}
                            <i className={props.icon}></i>
                        </span>
                    </div>
                    <Card.Text>{props.content}</Card.Text>
                    <ALink to={props.to}>
                        <button className="btn btn-primary">More Details</button>
                    </ALink>
                </Card.Body>
            </Card>
        </>
    );
};

export default ServiceCard;
