import classNames from 'classnames/bind';

import styles from './Support.module.scss';

const cx = classNames.bind(styles);

function Support() {
    return (
        <div className="support-page">
            <div className={cx('page-header')}>
                <div className={cx('container')}>
                    <div className={cx('row')}>
                        <div className={cx('inner-row')}>
                            <h2 className={cx('title')}>Khách hàng cần chúng tôi hỗ trợ?</h2>
                            <div className={cx('desc')}>
                                Hỗ trợ giải đáp các vấn đề trong quá trình sử dụng Dịch vụ.
                            </div>
                            <div className={cx('contact')}>
                                <div>
                                    <img
                                        className={cx('icon')}
                                        src="https://galaxyplay.vn/static/fp_assets/img/Email.svg"
                                        alt="Email"
                                    />
                                    <span className={cx('email')}>Email: zinryo123a@gmail.com</span>
                                </div>
                                <div>
                                    <img
                                        className={cx('icon')}
                                        src="https://galaxyplay.vn/static/fp_assets/img/Local_phone.svg"
                                        alt="Hotline"
                                    />
                                    <span>Hotline: 0969820227</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('related-products')}>
                <div className={cx('container-fluid')}>
                    <div className={cx('row-1')}>
                        <div className={cx('inner-row')}>
                            <h2 className={cx('title')}>Câu hỏi thường gặp</h2>
                        </div>
                    </div>
                    <div className={cx('row-2')}>
                        <div className={cx('inner-row-2')}>
                            <div className={cx('content')}>
                                <div className={cx('card')}>
                                    <h4 className={cx('card-title')}>
                                        <a className={cx('card-link')} href="">
                                            Thông tin
                                        </a>
                                    </h4>
                                    <div className={cx('card-body')}>
                                        <a href="">
                                            <div className={cx('card-description')}>Galaxy Play là gì?</div>
                                        </a>
                                        <a href="">
                                            <div className={cx('card-description')}>
                                                Galaxy Play có những sản phẩm nào?
                                            </div>
                                        </a>
                                        <a href="">
                                            <div className={cx('card-description')}>
                                                Galaxy Play có thể xem trên thiết bị nào?
                                            </div>
                                        </a>
                                    </div>
                                    <div className={cx('card-footer')}>
                                        <div className="price-container">
                                            <a href="">
                                                <span className={cx('price')}>Xem thêm</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('inner-row-2')}>
                            <div className={cx('content')}>
                                <div className={cx('card')}>
                                    <h4 className={cx('card-title')}>
                                        <a className={cx('card-link')} href="">
                                            Câu hỏi thường gặp
                                        </a>
                                    </h4>
                                    <div className={cx('card-body')}>
                                        <a href="">
                                            <div className={cx('card-description')}>
                                                Tài khoản Galaxy Play có thể đăng nhập và xem được bao nhiêu thiết bị?
                                            </div>
                                        </a>
                                        <a href="">
                                            <div className={cx('card-description')}>
                                                Có bị giới hạn số lượng phim tải về hay không?
                                            </div>
                                        </a>
                                        <a href="">
                                            <div className={cx('card-description')}>Làm thế nào để hủy tài khoản?</div>
                                        </a>
                                    </div>
                                    <div className={cx('card-footer')}>
                                        <div className="price-container">
                                            <a href="">
                                                <span className={cx('price')}>Xem thêm</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Support;
