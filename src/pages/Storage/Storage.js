import classNames from 'classnames/bind';

import styles from './Storage.module.scss';

const cx = classNames.bind(styles);

function Storage() {
    return <div className={cx('wrapper')}></div>;
}

export default Storage;
