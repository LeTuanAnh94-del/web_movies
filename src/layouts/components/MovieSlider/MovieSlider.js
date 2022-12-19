import classNames from 'classnames/bind';
import { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-slideshow-image/dist/styles.css';

import { IconLeftArrow, IconRightArrow } from '../../../components/Icons';
import Poster from '../../../components/Poster';
import Heading from '../Heading';
import styles from './MovieSlider.module.scss';

const cx = classNames.bind(styles);

function MovieSlider({ data, label }) {
    const sliderRef = useRef();

    const handlePrev = () => {
        sliderRef.current.slickPrev();
    };
    const handleNext = () => {
        sliderRef.current.slickNext();
    };

    const settings = {
        dots: false,
        infinite: false,
        speed: 1000,
        slidesToShow: 4.4,
        slidesToScroll: 4.4,
        initialSlide: 0,
        arrows: false,
        draggable: false,
        dots: false,
    };

    return (
        <div className={cx('block-ribbon_block')}>
            <section className={cx('block-ribbon')}>
                <Heading label={label} />
                <div className={cx('row-container')}>
                    <div className={cx('arrow-left')} onClick={handlePrev}>
                        <IconLeftArrow className={cx('active-path')} />
                    </div>
                    <div className={cx('wrapper')}>
                        <Slider ref={sliderRef} className={cx('slides')} {...settings}>
                            {data.map((movie, index) => (
                                <Poster key={index} data={movie} />
                            ))}
                        </Slider>
                    </div>
                    <div className={cx('arrow-right')} onClick={handleNext}>
                        <IconRightArrow className={cx('active-path')} />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default MovieSlider;
