import classNames from 'classnames/bind';

import styles from './Heading.module.scss';
import { IconLink } from '../../../components/Icons';

const cx = classNames.bind(styles);

function Heading({ label }) {
    return (
        <div className={cx('heading')}>
            <a href="#">
                <div className={cx('title')}>
                    {label}
                    <IconLink className={cx('icon-link')} />
                </div>
            </a>
        </div>
    );
}

export default Heading;
