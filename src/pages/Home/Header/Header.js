import { Fade } from 'react-slideshow-image';
import classNames from 'classnames/bind';
import { useState, useRef, useEffect } from 'react';

import { PrevArrow, NextArrow } from '../../../components/Icons';
import styles from './Header.module.scss';
import * as BannerService from '../../../services/Home/BannerService';

const cx = classNames.bind(styles);
const API_KEY = '7075a527c5f87215b1ec4cffdd7567a4';

function Header() {
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
        <div className={cx('headers')}>
            <div className={cx('prev')} onClick={handleBack}>
                <PrevArrow />
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
                <NextArrow />
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
    );
}

export default Header;
