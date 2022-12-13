import classNames from 'classnames/bind';
import Action, { ActionAdd, ActionPlay, ActionTrailer } from '../Action';
import ImageBackgrounds from '../Images/ImageBackgrounds';

import styles from './Background.module.scss';

const cx = classNames.bind(styles);

function Background({ data }) {
    return (
        <div className={cx('slide')}>
            <div className={cx('wrapper-img')}>
                <div className={cx('movie-items')}>
                    <div className={cx('movie-item')}>
                        <ImageBackgrounds data={data.backdrop_path} />
                        <div className={cx('detail-enter')}>
                            <Action className={cx('action')}>
                                <ActionTrailer />
                                <div className={cx('border-right')}></div>
                                <ActionPlay />
                                <div className={cx('border-right')}></div>
                                <ActionAdd />
                                <a href="">
                                    <div className={cx('detail-enter-done')}>
                                        <div className={cx('movie-name')}>{data.title}</div>
                                        <div className={cx('movie-detail')}>
                                            <div className={cx('movie-language')}>Phim {data.original_language}</div>
                                        </div>
                                    </div>
                                </a>
                            </Action>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Background;
