import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Slider/style.scss';
const TeamSlider = props => {
    // eslint-disable-next-line
    {
        const settings = {
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 1500,
            slidesToScroll: 1,
            className: 'center',
            centerMode: true,
            slidesToShow: 1,
            row: 1,
            slidesPerRow: 2,
        };
        return (
            <>
                <Slider {...settings}>{props.children}</Slider>
            </>
        );
    }
};
export default TeamSlider;
