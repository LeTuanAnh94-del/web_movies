import classNames from 'classnames/bind';

import styles from './ImageBackground.module.scss';

const cx = classNames.bind(styles);

function ImageBackground({ data }) {
    return (
        <div>
            <a>
                <img className={cx('img')} src={`https://image.tmdb.org/t/p/original/${data}`} />
            </a>
        </div>
    );
}

export default ImageBackground;
