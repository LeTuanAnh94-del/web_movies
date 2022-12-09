import classNames from 'classnames/bind';
import { useRef } from 'react';
import Slider from 'react-slick';
import { IconLeftArrow, IconLink, IconRightArrow } from '../../../components/Icons';
import Poster from '../../../components/Poster';

import styles from './MovieSlider.module.scss';

const cx = classNames.bind(styles);

function MovieSlider({ data }) {
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
                <div className={cx('heading')}>
                    <a href="#">
                        <div className={cx('title')}>
                            Phim đang chiếu
                            <IconLink className={cx('icon-link')} />
                        </div>
                    </a>
                </div>
            </section>
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
        </div>
    );
}

export default MovieSlider;
