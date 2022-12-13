import classNames from 'classnames/bind';

import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer({ className }) {
    return (
        <div className={className}>
            <div className={cx('container')}>
                <div className={cx('row')}>
                    <div className={cx('footer-logo')}>
                        <img src="https://assets.glxplay.io/web/images/logoglx.svg" alt="" className={cx('logo')} />
                    </div>
                    <div className={cx('address')}>
                        <address className={cx('details')}>
                            <span className={cx('detail')}>Website được cung cấp bởi Công ty Cổ phần Lê Tuấn Anh</span>
                            <span className={cx('detail')}>Địa chỉ: 32, Phan Đăng Lưu, Yên Viên, Gia Lâm, Hà Nội</span>
                        </address>
                    </div>
                    <div className={cx('promotion')}>
                        <h4 className={cx('footer-title')}>GIỚI THIỆU</h4>
                        <ul className={cx('footer-nav')}>
                            <li className={cx('footer-nav-item')}>
                                <a href="" className={cx('footer-nav-link')}>
                                    Quy chế sử dụng Website
                                </a>
                            </li>
                            <li className={cx('footer-nav-item')}>
                                <a href="" className={cx('footer-nav-link')}>
                                    Chính sách bảo mật
                                </a>
                            </li>
                            <li className={cx('footer-nav-item')}>
                                <a href="" className={cx('footer-nav-link')}>
                                    Khuyến mãi
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('support')}>
                        <h4 className={cx('footer-title')}>HỖ TRỢ</h4>
                        <ul className={cx('footer-nav')}>
                            <li className={cx('footer-nav-item')}>
                                <a href="" className={cx('footer-nav-link')}>
                                    0969820227 (24/7)
                                </a>
                            </li>
                            <li className={cx('footer-nav-item')}>
                                <a href="" className={cx('footer-nav-link')}>
                                    zinryo123a@gmail.com
                                </a>
                            </li>
                            <li className={cx('footer-nav-item')}>
                                <a href="" className={cx('footer-nav-link')}>
                                    http://localhost:3000/support
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('connect')}>
                        <div className={cx('row')}>
                            <div className={cx('social')}>
                                <h4 className={cx('footer-title')}>KẾT NỐI VỚI CHÚNG TÔI</h4>
                                <div className={cx('footer-social')}>
                                    <a className={cx('icon')} href="">
                                        <img
                                            className={cx('icon-fb')}
                                            src="//assets.glxplay.io/web/images/icon-social-facebook.svg"
                                            alt=""
                                        />
                                    </a>
                                    <a href="">
                                        <img
                                            className={cx('icon-instagram')}
                                            src="//assets.glxplay.io/web/images/icon-social-insta.svg"
                                            alt=""
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
