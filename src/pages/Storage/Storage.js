import classNames from 'classnames/bind';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import 'react-slideshow-image/dist/styles.css';
import Banner from '../../layouts/components/Banner';
import styles from './Storage.module.scss';

const cx = classNames.bind(styles);

function Storage() {
    return (
        <>
            <div className="block-ribbon-banner-block">
               
            </div>
            <div className={cx('movie-pass')}>
                <section className={cx('block-ribbon')}>
                    <div className={cx('title-movie-pass')}>
                        <a href="#" className={cx('link-movie-pass')}>
                            <div className={cx('wrapper-link-movie-pass')}>
                                Galaxy Play Movie Pass
                                <svg
                                    className={cx('icon-link')}
                                    xmlns="http://www.w3.org/2000/svg"
                                    xlink="http://www.w3.org/1999/xlink"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                >
                                    <defs>
                                        <path id="prefix__a" d="M0 0h24v24H0z" />
                                    </defs>
                                    <g fill="none" fillRule="evenodd">
                                        <mask id="prefix__b" fill="#fff">
                                            <use href="#prefix__a" />
                                        </mask>
                                        <path
                                            fill="#FFF"
                                            d="M7.973 0l-2.83 2.83 9.17 9.17-9.17 9.17L7.973 24l12-12z"
                                            mask="url(#prefix__b)"
                                        />
                                    </g>
                                </svg>
                            </div>
                        </a>
                    </div>
                    <div className={cx('row')}>
                        <div>
                            <div className={cx('inline-row-first')}>
                                <div className={cx('inline-row-second')}>
                                    <div className={cx('inline-row-third')}>
                                        <div className={cx('inline-row-forth')}>
                                            <div className={cx('slide-active')}>
                                                <div className={cx('inner-slide-active-first')}>
                                                    <div className={cx('img-placeholder')}></div>
                                                    <div className={cx('inner-slide-active-second')}>
                                                        <div className={cx('inner-slide-active-third')}>
                                                            <a href="">
                                                                <div className={cx('hover-img-ratio')}>
                                                                    <img
                                                                        className={cx('hover-img')}
                                                                        src="https://assets.glxplay.io/images/w400/title/viet-movie-pass_web_posterLandscape_7ab9f20f13bb49306dbe2905bd10fb6c.jpg"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={cx('slide-active')}>
                                                <div className={cx('inner-slide-active-first')}>
                                                    <div className={cx('img-placeholder')}></div>
                                                    <div className={cx('inner-slide-active-second')}>
                                                        <div className={cx('inner-slide-active-third')}>
                                                            <a href="">
                                                                <div className={cx('hover-img-ratio')}>
                                                                    <img
                                                                        className={cx('hover-img')}
                                                                        src="https://assets.glxplay.io/images/w400/title/hollywood-movie-pass_mobile_posterLandscape_80a72b193627bec76a33a1b194f889af.png"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={cx('slide-active')}>
                                                <div className={cx('inner-slide-active-first')}>
                                                    <div className={cx('img-placeholder')}></div>
                                                    <div className={cx('inner-slide-active-second')}>
                                                        <div className={cx('inner-slide-active-third')}>
                                                            <a href="">
                                                                <div className={cx('hover-img-ratio')}>
                                                                    <img
                                                                        className={cx('hover-img')}
                                                                        src="https://assets.glxplay.io/images/w400/title/movie-pass-unlimited_web_posterLandscape_1b19f60aa6e963e323834b1944c98449.png"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className={cx('block-ribbon-block')}></div>
            <div className={cx('block-ribbon-block')}>
                <section className={cx('block-ribbon-landscape')}>
                    <div className={cx('title-movie-pass')}>
                        <a href="#" className={cx('link-movie-pass')}>
                            <div className={cx('wrapper-link-movie-pass')}>
                                Phim Mới Thịnh Hành Trên Galaxy Play
                                <svg
                                    className={cx('icon-link')}
                                    xmlns="http://www.w3.org/2000/svg"
                                    xlink="http://www.w3.org/1999/xlink"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                >
                                    <defs>
                                        <path id="prefix__a" d="M0 0h24v24H0z" />
                                    </defs>
                                    <g fill="none" fillRule="evenodd">
                                        <mask id="prefix__b" fill="#fff">
                                            <use href="#prefix__a" />
                                        </mask>
                                        <path
                                            fill="#FFF"
                                            d="M7.973 0l-2.83 2.83 9.17 9.17-9.17 9.17L7.973 24l12-12z"
                                            mask="url(#prefix__b)"
                                        />
                                    </g>
                                </svg>
                            </div>
                        </a>
                    </div>
                    <div className={cx('row')}>
                        <div>
                            <div className={cx('inline-row-first')}>
                                <Slider className={cx('inline-row-second')}>
                                    <div className={cx('inline-row-third-first')}>
                                        <svg
                                            className={cx('arrow-left')}
                                            viewBox="0 0 492 492"
                                            width="30px"
                                            id="arrow-left"
                                        >
                                            <path
                                                d="M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12    C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084    c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864    l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z"
                                                data-original="#000000"
                                                className="active-path"
                                                data-old_color="#000000"
                                            />
                                        </svg>
                                    </div>
                                    <div className={cx('inline-row-third')}>
                                        <div className={cx('slide-dots')}>
                                            <div className={cx('slide-dot-active')}></div>
                                            <div className={cx('slide-dot')}></div>
                                            <div className={cx('slide-dot')}></div>
                                            <div className={cx('slide-dot')}></div>
                                        </div>
                                        <div className={cx('inline-row-forth')}>
                                            <div className={cx('slide-active')}>
                                                <div className={cx('inner-slide-active-first')}>
                                                    <div className={cx('img-placeholder')}></div>
                                                    <div className={cx('inner-slide-active-second')}>
                                                        <div className={cx('inner-slide-active-third')}>
                                                            <a href="">
                                                                <div className={cx('hover-img-ratio')}>
                                                                    <img
                                                                        className={cx('hover-img')}
                                                                        src="https://assets.glxplay.io/images/w400/title/nope_web_posterLandscape_d7de659f79412ccbb4cc922e579a43fb.jpg"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </a>
                                                            <div className={cx('inner-slide-third-first')}>
                                                                <img
                                                                    className={cx('img-slide-third-first')}
                                                                    src="https://assets.glxplay.io/static/web_paid1.png"
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <a href="#" className={cx('overlay-enter-done')}>
                                                                <div className={cx('inner-overlay-enter-done')}></div>
                                                            </a>
                                                            <div className={cx('inner-slide-third-second')}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('inline-row-third-second')}>
                                        <svg
                                            className={cx('arrow-right')}
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 492.004 492.004"
                                            width="30px"
                                            height="30px"
                                        >
                                            <path
                                                d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12    c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028    c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265    c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"
                                                data-original="#000000"
                                                className="active-path"
                                                data-old_color="#000000"
                                            />
                                        </svg>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Storage;
