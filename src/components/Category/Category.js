import classNames from 'classnames/bind';
import { useState } from 'react';
import { ArrowUp } from '../Icons';

import styles from './Category.module.scss';

const cx = classNames.bind(styles);

function Category({ data, label }) {
    const [dropdown, setDropdown] = useState(false);

    const handleDropdown = () => {
        setDropdown((current) => !current);
    };

    return (
        <div className={cx('category-all')}>
            <div className={cx('title')}>{label}</div>
            <div className={cx('dropdown')}>
                <div className={cx('dropbtn')} onClick={handleDropdown}>
                    Choose Genres
                    <ArrowUp className={cx('arrow-up')} />
                </div>
                <div className={cx(`dropdown-content${dropdown == true ? '-active' : ''}`)}>
                    <ul className={cx('genres')}>
                        {data.map((genre, index) => (
                            <li className={cx('genre')} key={index}>
                                <a className={cx('item')} href="">
                                    {genre.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Category;
