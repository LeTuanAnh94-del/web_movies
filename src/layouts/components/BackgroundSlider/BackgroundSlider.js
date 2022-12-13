import classNames from 'classnames/bind';
import { useRef } from 'react';

import styles from './BackgroundSlider.module.scss';
import Heading from '../Heading';
import { IconLeftArrow, IconRightArrow } from '../../../components/Icons';
import Slider from 'react-slick';
import Background from '../../../components/Background';

const cx = classNames.bind(styles);

function BackgroundSlider({ data, label }) {
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
        <div className={cx('block-ribbon-block')}>
            <section className={cx('block-ribbon')}>
                <Heading label={label} />
                <div className={cx('row-container')}>
                    <div className={cx('arrow-left')} onClick={handlePrev}>
                        <IconLeftArrow className={cx('active-path')} />
                    </div>
                    <div className={cx('wrapper')}>
                        <Slider className={cx('slides')} ref={sliderRef} {...settings}>
                            {data.map((movie, index) => (
                                <Background key={index} data={movie} />
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

export default BackgroundSlider;
