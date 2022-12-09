import classNames from 'classnames/bind';

import styles from './ImagePoster.module.scss';

const cx = classNames.bind(styles);

function ImagePoster({ data }) {
    return (
        <div>
            <a>
                <img className={cx('img-portrait')} src={`https://image.tmdb.org/t/p/w500/${data}`} />
                <div className={cx('gradient')}></div>
            </a>
        </div>
    );
}

export default ImagePoster;
