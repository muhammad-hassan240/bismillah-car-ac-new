import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.scss';
const SimpleSlider = props => {
    // eslint-disable-next-line
    {
        const settings = {
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 1500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return (
            <>
                <Slider {...settings}>{props.children}</Slider>
            </>
        );
    }
};
export default SimpleSlider;
