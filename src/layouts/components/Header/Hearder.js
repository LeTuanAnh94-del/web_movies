import styles from './Header.module.scss';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <a href="#" className={cx('brand')}>
                    <img src="//assets.glxplay.io/web/images/logoglx.svg" alt="" className={cx('logo')} />
                </a>
                <div className={cx('menu')}>
                    <ul className={cx('items')}>
                        <li className={cx('btn-item')}>
                            <a href="#" className={cx('item')}>
                                Trang chủ
                            </a>
                        </li>
                        <li className={cx('btn-item')}>
                            <a href="#" className={cx('item')}>
                                Kho phim
                            </a>
                        </li>
                        <li className={cx('btn-item')}>
                            <a href="#" className={cx('item')}>
                                Phim điện ảnh
                            </a>
                        </li>
                        <li className={cx('btn-item')}>
                            <a href="#" className={cx('item')}>
                                Phim bộ
                            </a>
                        </li>
                        <li className={cx('btn-item')}>
                            <a href="#" className={cx('item')}>
                                Phim thuê
                            </a>
                        </li>
                        <li className={cx('btn-item')}>
                            <a href="#" className={cx('item')}>
                                Khuyến mãi
                            </a>
                        </li>
                        <li className={cx('btn-item')}>
                            <a href="#" className={cx('item')}>
                                Hỗ trợ
                            </a>
                        </li>
                    </ul>
                </div>
                <ul className={cx('item-login')}>
                    <li className={cx('btn-login')}>
                        <a href="#" className={cx('login')}>
                            Đăng Nhập
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
