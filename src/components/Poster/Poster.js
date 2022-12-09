import classNames from 'classnames/bind';

import styles from './Poster.module.scss';
import { IconTrailer, IconPlay, IconAddList } from '../Icons';
import ImagePosters from '../Images/ImagePosters';
import Action, { ActionAdd, ActionPlay, ActionTrailer } from './Action';

const cx = classNames.bind(styles);

function Poster({ data }) {
    return (
        <div className={cx(cx('slide'))}>
            <div className={cx('wrapper-img')}>
                <div className={cx('movie-items')}>
                    <div className={cx('movie-item')}>
                        <ImagePosters data={data.poster_path} />
                        <div className={cx('detail-enter')}>
                            <Action className={cx('action')}>
                                <ActionTrailer />
                                <div className={cx('border-right')}></div>
                                <ActionPlay />
                                <div className={cx('border-right')}></div>
                                <ActionAdd />
                            </Action>
                            <a href="#">
                                <div className={cx('movie-name')}>{data.title}</div>
                                <div className={cx('movie-detail')}>
                                    <div className={cx('movie-language')}>{data.original_language}</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Poster;
