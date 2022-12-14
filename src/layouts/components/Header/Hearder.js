import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useState } from 'react';

import config from '../../../config';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    const [background, setBackground] = useState(false);
    const changeBackground = () => {
        if (window.scrollY >= 90) {
            setBackground(true);
        } else {
            setBackground(false);
        }
    };

    window.addEventListener('scroll', changeBackground);

    return (
        <div className={cx(background ? 'wrapper' : 'wrapper-scroll')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('brand')}>
                    <img src="//assets.glxplay.io/web/images/logoglx.svg" alt="" className={cx('logo')} />
                </Link>
                <div className={cx('menu')}>
                    <ul className={cx('items')}>
                        <li className={cx('btn-item')}>
                            <NavLink
                                to={config.routes.home}
                                className={(nav) => cx('item', { active: nav.isActive })}
                                exact="true"
                            >
                                Trang chủ
                            </NavLink>
                        </li>
                        <li className={cx('btn-item')}>
                            <NavLink
                                to={config.routes.storage}
                                className={(nav) => cx('item', { active: nav.isActive })}
                                exact="true"
                            >
                                Kho Phim
                            </NavLink>
                        </li>
                        <li className={cx('btn-item')}>
                            <NavLink
                                to={config.routes.movies}
                                className={(nav) => cx('item', { active: nav.isActive })}
                                exact="true"
                            >
                                Phim Điện Ảnh
                            </NavLink>
                        </li>
                        <li className={cx('btn-item')}>
                            <NavLink
                                to={config.routes.seriesMovies}
                                className={(nav) => cx('item', { active: nav.isActive })}
                                exact="true"
                            >
                                Phim Bộ
                            </NavLink>
                        </li>
                        <li className={cx('btn-item')}>
                            <NavLink
                                to={config.routes.support}
                                className={(nav) => cx('item', { active: nav.isActive })}
                                exact="true"
                            >
                                Hỗ Trợ
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <ul className={cx('item-login')}>
                    <li className={cx('btn-login')}>
                        <NavLink to={config.routes.home} className={cx('login')}>
                            Đăng Nhập
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}

Header.propTypes = {
    to: PropTypes.string.isRequired,
};

export default Header;
