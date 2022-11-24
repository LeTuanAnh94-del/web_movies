import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function Defaultlayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('content')}>{children}</div>
            <Footer />
        </div>
    );
}

Defaultlayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Defaultlayout;
