import classNames from 'classnames/bind';
import { Fade } from 'react-slideshow-image';
import { useRef, useState } from 'react';

import styles from './Banner.module.scss';
import Images from '../../../components/Images/ImageBanners';

const cx = classNames.bind(styles);

function Banner({ data }) {
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
    const props = {
        duration: 1000,
        arrows: false,
        infinite: true,
    };

    return (
        <div className={cx('banner-slider')}>
            <div className={cx('ribbon-spotlight')}>
                <div className={cx('stick-list')}>
                    <div className={cx('slick-track')}>
                        <Fade
                            {...props}
                            ref={changeRef}
                            onChange={(prevIndex, nexIndex) => handleChangeIndex(nexIndex)}
                        >
                            {data.map((movie, index) => (
                                <Images key={index} data={movie.backdrop_path} />
                            ))}
                        </Fade>
                    </div>
                </div>
            </div>
            <div className={cx('wrap-action-slide')}>
                <div className="wrap-dots">
                    <ul className={cx('slick-dots')}>
                        {data.map((movie, index) => (
                            <li
                                className={cx(`slick${slickActiveIndex == index ? '-active' : ''}`)}
                                onClick={() => handleChangeIndex(index)}
                            >
                                <button
                                    className={cx(`slick-slide${slickActiveIndex == index ? '-active' : ''}`)}
                                ></button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={cx('wrap-arrows')}>
                    <div className={cx('prev-arrow')} onClick={handleBack}>
                        <svg
                            className={cx('arrow')}
                            fill="#F2F2F2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                        >
                            <path
                                d="M18 1.875c8.906 0 16.125 7.22 16.125 16.125 0 8.906-7.22 16.125-16.125 16.125-8.906 0-16.125-7.22-16.125-16.125C1.875 9.094 9.095 1.875 18 1.875zm0 2.25C10.337 4.125 4.125 10.337 4.125 18S10.337 31.875 18 31.875 31.875 25.663 31.875 18 25.663 4.125 18 4.125zM10.875 18v-.036l.006-.078-.006.114c0-.06.005-.12.014-.177l.01-.051c.024-.118.066-.23.124-.33l.026-.044.043-.063.004-.004.01-.015a1.3 1.3 0 01.083-.096l.016-.015 6-6a1.125 1.125 0 011.7 1.464l-.11.126-4.079 4.08H24a1.125 1.125 0 01.153 2.24l-.153.01h-9.284l4.08 4.08c.399.399.435 1.024.108 1.464l-.109.126c-.399.4-1.024.436-1.464.11l-.126-.11-6-6-.018-.018a.725.725 0 01-.045-.05l.063.068a1.155 1.155 0 01-.104-.118l-.026-.036a.943.943 0 01-.04-.062l-.033-.06-.02-.04a.538.538 0 01-.024-.055.983.983 0 01-.07-.252l-.005-.04a.62.62 0 01-.006-.062l-.002-.052V18z"
                                fillRule="evenodd"
                            />
                        </svg>
                    </div>
                    <div className={cx('next-arrow')} onClick={handleNext}>
                        <svg
                            className={cx('arrow')}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#F2F2F2"
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                        >
                            <path
                                d="M18 1.875c8.906 0 16.125 7.22 16.125 16.125 0 8.906-7.22 16.125-16.125 16.125-8.906 0-16.125-7.22-16.125-16.125C1.875 9.094 9.095 1.875 18 1.875zm0 2.25C10.337 4.125 4.125 10.337 4.125 18S10.337 31.875 18 31.875 31.875 25.663 31.875 18 25.663 4.125 18 4.125zm.67 6.97l.125.11 6 6 .018.018c.016.016.03.032.045.05l-.063-.068c.038.037.072.077.104.118l.026.036c.014.02.027.04.04.062l.033.06.02.04a.538.538 0 01.024.055 1.185 1.185 0 01.07.252l.005.04c.005.043.008.087.008.132l-.002.065c0 .016-.002.032-.004.048l.006-.113c0 .06-.005.12-.014.177l-.01.051a1.034 1.034 0 01-.15.374c-.014.021-.027.041-.042.06l-.005.007-.01.015a1.3 1.3 0 01-.083.096l-.016.015-6 6a1.125 1.125 0 01-1.7-1.464l.11-.126 4.078-4.08H12a1.125 1.125 0 01-.153-2.24l.153-.01h9.283l-4.078-4.08a1.125 1.125 0 01-.11-1.464l.11-.126a1.125 1.125 0 011.464-.11z"
                                fillRule="evenodd"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
