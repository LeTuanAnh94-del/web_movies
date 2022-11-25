import classNames from 'classnames/bind';

import styles from './Movies.module.scss';

const cx = classNames.bind(styles);

function Movies() {
    return (
        <div className={cx('banner')}>
            <h1>Đây là trang phim điện ảnh</h1>
        </div>
    );
}

export default Movies;
