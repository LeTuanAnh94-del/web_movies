import classNames from 'classnames/bind';

import styles from './Login.module.scss';

const cx = classNames.bind(styles);

function Login() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <a href="">
                    <img className={cx('logo')} src="https://assets.glxplay.io/web/images/logoglx.svg" alt="" />
                </a>
            </div>
            <div className={cx('enter-done')}>
                <form className={cx('wrap')}>
                    <div className={cx('container')}>
                        <div className={cx('title')}>Đăng ký/Đăng nhập</div>
                        <button className={cx('button')}>
                            <img className={cx('icon')} src="https://galaxyplay.vn/main/assets/img/gmail.svg" alt="" />
                            Tiếp tục với Google
                        </button>
                        <div className={cx('horizontal-line')}>HOẶC</div>
                        <button className={cx('button')}>Dùng số điện thoại của bạn</button>
                        <div className={cx('description')}>
                            Khi tiếp tục, bạn đã đồng ý&nbsp;
                            <a className={cx('link')} href="">
                                Quy chế sử dụng dịch vụ
                            </a>
                            &nbsp;của Galaxy Play
                        </div>
                    </div>
                </form>
            </div>
            <div className={cx('footer')}>
                <a href="">Hỗ trợ</a>
                <a href="">Chính sách bảo mật</a>
            </div>
        </div>
    );
}

export default Login;
