import classNames from 'classnames/bind';

import styles from './Images.module.scss';

const cx = classNames.bind(styles);

function Images({ data }) {
    return (
        <div className={cx('lazy-banner')}>
            <div className={cx('bg-banner')}>
                <img
                    src={`https://image.tmdb.org/t/p/original/${data}`}
                    alt={data.title}
                    className={cx('img-banner')}
                />
                <div className={cx('banner-gradiant-bottom')}></div>
                <div className={cx('banner-gradiant-top')}></div>
            </div>
        </div>
    );
}

export default Images;
