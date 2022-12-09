import classNames from 'classnames/bind';

import { IconTrailer, IconPlay, IconAddList } from '../../Icons/Icons';
import styles from './Action.module.scss';

const cx = classNames.bind(styles);

export const ActionTrailer = () => (
    <div className={cx('trailer-icon')}>
        <IconTrailer className={cx('icon-trailer')} />
        <div className={cx('note-list')}>
            <div className={cx('clip-path')}>
                <div className={cx('path')}></div>
                <div className={cx('txt-path')}>Xem trailer</div>
            </div>
        </div>
    </div>
);
export const ActionPlay = () => (
    <a href="#">
        <div className={cx('play-icon')}>
            <IconPlay className={cx('icon-play')} />
            <div className={cx('note-list')}>
                <div className={cx('clip-path')}>
                    <div className={cx('path')}></div>
                    <div className={cx('txt-path')}>Xem phim</div>
                </div>
            </div>
        </div>
    </a>
);
export const ActionAdd = () => (
    <a href="#">
        <div className={cx('add-icon')}>
            <IconAddList className={cx('add-list-icon')} />
            <div className={cx('note-list')}>
                <div className={cx('clip-path')}>
                    <div className={cx('path')}></div>
                    <div className={cx('txt-path')}>Thêm vào danh sách</div>
                </div>
            </div>
        </div>
    </a>
);
