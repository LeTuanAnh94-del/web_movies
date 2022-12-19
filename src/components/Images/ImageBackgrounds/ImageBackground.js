import classNames from 'classnames/bind';

import styles from './ImageBackground.module.scss';

const cx = classNames.bind(styles);

function ImageBackground({ data }) {
    return (
        <div className={cx('wrapper')}>
            <a>
                <img
                    className={cx('img')}
                    src="https://assets.glxplay.io/images/w400/categories/khampha_landscape_1.png"
                />
                <div className={cx('genre')}>{data}</div>
            </a>
        </div>
    );
}

export default ImageBackground;
