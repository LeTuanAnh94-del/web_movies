import classNames from 'classnames/bind';
import { Fade } from 'react-slideshow-image';
import { useState, useEffect, useRef } from 'react';

import styles from './Home.module.scss';
import * as BannerService from '../../services/Home/BannerService';

const cx = classNames.bind(styles);
const API_KEY = '7075a527c5f87215b1ec4cffdd7567a4';

function Home() {
    const [banner, setBanner] = useState([]);
    const [slickActiveIndex, setSlickActiveIndex] = useState(0);

    const changeRef = useRef();

    const handleNext = () => {
        changeRef.current.goNext();
    };
    const handleBack = () => {
        changeRef.current.goBack();
    };
    const handleChangeIndex = (index) => {
        setSlickActiveIndex(index);
        changeRef.current.goTo(index);
    };

    useEffect(() => {
        BannerService.getBanner({ apiKey: API_KEY, language: 'en_US', page: 1 })
            .then((data) => {
                setBanner((prevBanner) => [...prevBanner, ...data]);
            })
            .catch((error) => console.log(error));
    }, []);

    const props = {
        duration: 1000,
        arrows: false,
        infinite: true,
    };

    return (
        <div className="wrapper">
            <div className={cx('section-landing-page')}>
                <div className={cx('headers')}>
                    <div className={cx('prev')} onClick={handleBack}>
                        <svg
                            className={cx('svg')}
                            aria-hidden="true"
                            focusable={false}
                            data-prefix="far"
                            data-icon="chevron-left"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 256 512"
                        >
                            <path
                                fill="currentColor"
                                d="M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z"
                                className={cx('path')}
                            />
                        </svg>
                    </div>
                    <div className={cx('slick-list')}>
                        <Fade
                            onChange={(prevIndex, nexIndex) => handleChangeIndex(nexIndex)}
                            {...props}
                            ref={changeRef}
                            className={cx('slick-track')}
                        >
                            {banner.map((data, index) => (
                                <div className={cx('item-header')}>
                                    <a href="">
                                        <img
                                            key={index}
                                            className={cx('spotlight-web')}
                                            src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
                                            alt=""
                                        />
                                    </a>
                                </div>
                            ))}
                        </Fade>
                    </div>
                    <div className={cx('next')} onClick={handleNext}>
                        <svg
                            className={cx('svg')}
                            aria-hidden="true"
                            focusable={false}
                            data-prefix="far"
                            data-icon="chevron-right"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 256 512"
                        >
                            <path
                                className={cx('path')}
                                fill="currentColor"
                                d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"
                            />
                        </svg>
                    </div>
                    <ul className={cx('slick-dots')}>
                        {banner.map((banner, index) => (
                            <li
                                onClick={() => handleChangeIndex(index)}
                                className={cx(`slick${slickActiveIndex == index ? '-active' : ''}`)}
                            >
                                <button className={cx('slick-slide-control')}></button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Home;
