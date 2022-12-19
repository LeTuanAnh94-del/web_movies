import classNames from 'classnames/bind';
import ImageBackgrounds from '../Images/ImageBackgrounds';

import styles from './Background.module.scss';

const cx = classNames.bind(styles);

function Background({ data }) {
    return (
        <div className={cx('slide')}>
            <div className={cx('wrapper-img')}>
                <div className={cx('movie-items')}>
                    <div className={cx('movie-item')}>
                        <ImageBackgrounds data={data.name} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Background;
