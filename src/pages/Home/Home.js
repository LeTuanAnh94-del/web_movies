import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import Header from '../../pages/Home/Header';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className="wrapper">
            <div className={cx('section-landing-page')}>
                <Header />
                <div className={cx('landing-page-1')}>
                    <div className={cx('container-fluid')}>
                        <div className={cx('row')}>
                            <div className={cx('inner-row-1')}>
                                <h2 className={cx('title-landing-page')}>
                                    Giải trí online không giới hạn hàng nghìn giờ nội dung đậm chất Việt
                                </h2>
                                <div className={cx('group-description')}>
                                    <p className={cx('description')}>Bom tấn Việt chiếu rạp độc quyền và sớm nhất</p>
                                    <p className={cx('description')}>Thư viện phim Việt lớn nhất Việt Nam</p>
                                    <p className={cx('description')}>Phim bộ độc quyền của Galaxy Play</p>
                                    <p className={cx('description')}>Phim bộ hot Châu Á</p>
                                    <p className={cx('description')}>Siêu phẩm điện ảnh Hollywood và Disney</p>
                                </div>
                                <div className={cx('group-partner')}>
                                    <p className={cx('description')}>
                                        100+ đối tác sản xuất phim trong nước và quốc tế
                                    </p>
                                    <div className={cx('list-partner-1')}>
                                        <img
                                            style={{ width: '44px' }}
                                            className={cx('partner-item')}
                                            src="https://assets.glxplay.io/web/responsive/w200/sony2.png"
                                            alt=""
                                        />
                                        <img
                                            style={{ width: '82px' }}
                                            className={cx('partner-item')}
                                            src="https://assets.glxplay.io/web/responsive/w200/universal.png"
                                            alt=""
                                        />
                                        <img
                                            style={{ width: '84px' }}
                                            className={cx('partner-item')}
                                            src="https://assets.glxplay.io/web/responsive/w200/disney.png"
                                            alt=""
                                        />
                                        <img
                                            style={{ width: '100px' }}
                                            className={cx('partner-item')}
                                            src="https://assets.glxplay.io/web/responsive/w200/MGM.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className={cx('list-partner-2')}>
                                        <img
                                            style={{ width: '130px' }}
                                            className={cx('partner-item')}
                                            src="https://assets.glxplay.io/web/responsive/w200/studio-dragon-1.png"
                                            alt=""
                                        />
                                        <img
                                            style={{ width: '148px' }}
                                            className={cx('partner-item')}
                                            src="https://assets.glxplay.io/web/responsive/w200/hk-entertainment.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={cx('inner-row-2')}>
                                <div className={cx('row')}>
                                    <div className={cx('poster-img')}>
                                        <img
                                            className={cx('poster')}
                                            src="https://assets.glxplay.io/web/responsive/w300/Eve_1000x1500.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className={cx('poster-img')}>
                                        <img
                                            className={cx('poster')}
                                            src="https://assets.glxplay.io/web/responsive/w300/ChiMeHocYeu2_1000x1500.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className={cx('poster-img')}>
                                        <img
                                            className={cx('poster')}
                                            src="https://assets.glxplay.io/web/responsive/w300/DoctorStrangeInTheMultiverseOfMadness_1000x1500.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className={cx('poster-img')}>
                                        <img
                                            className={cx('poster')}
                                            src="https://assets.glxplay.io/web/responsive/w300/Cinderella2021_1000x1500.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className={cx('poster-img')}>
                                        <img
                                            className={cx('poster')}
                                            src="https://assets.glxplay.io/web/responsive/w300/ChiaKhoaTramTy_1000x1500.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className={cx('poster-img')}>
                                        <img
                                            className={cx('poster')}
                                            src="https://assets.glxplay.io/web/responsive/w300/MyHeroAcademiaWorldHeroesMission_1000x1500.jpg"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('landing-page-2')}>
                    <div className={cx('container-fluid')}>
                        <div className={cx('row')}>
                            <div className={cx('wrap-description')}>
                                <p className={cx('description')}>Chia sẻ từng khoảnh khắc cùng người thân và bạn bè</p>
                                <div className={cx('group-super-text')}>
                                    <div className="wrap-super-text">
                                        <div className={cx('super-text')}>
                                            <span>1</span>
                                            <h3>
                                                Tài khoản
                                                <br></br>
                                                Cao Cấp
                                            </h3>
                                        </div>
                                        <div className={cx('description')}>Đăng nhập</div>
                                        <div className={cx('super-text')}>
                                            <span>5</span>
                                            <h3>Thiết bị</h3>
                                        </div>
                                        <div className={cx('description')}>Xem trên</div>
                                        <div className={cx('super-text')}>
                                            <span>4</span>
                                            <h3>
                                                Thiết bị song song
                                                <br></br>
                                                cùng lúc
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <a href="">
                                    <div className={cx('btn-register-now')}>Đăng ký ngay</div>
                                </a>
                            </div>
                            <div className={cx('wrap-img')}>
                                <img
                                    src="https://assets.glxplay.io/web/responsive/w1000/Spotlight%20on%20Device_VER2%20X1.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('landing-page-3')}>
                    <div className={cx('container-fluid')}>
                        <div className={cx('row')}>
                            <div className={cx('wrap-img')}>
                                <img
                                    src="https://assets.glxplay.io/web/responsive/w500/home-page-iphone-12-pro-max.png"
                                    alt=""
                                />
                            </div>
                            <div className={cx('wrap-description')}>
                                <h2 className={cx('title-landing-page')}>
                                    Nội dung đặc sắc, trải nghiệm mượt mà trên thiết bị di động
                                </h2>
                                <div className="group-description">
                                    <p className={cx('description')}>1 tài khoản Galaxy Play Mobile</p>
                                    <p className={cx('description')}>1 Smartphone hoặc máy tính bảng</p>
                                    <p className={cx('description')}>Xem mọi lúc, mọi nơi!</p>
                                </div>
                                <a href="">
                                    <div className={cx('btn-register-now')}>Đăng ký ngay</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('landing-page-4')}>
                    <div className={cx('container-fluid')}>
                        <div className={cx('row')}>
                            <div className={cx('wrap-description')}>
                                <h2 className={cx('title-landing-page')}>Không chèn quảng cáo khi xem phim</h2>
                                <div className={cx('group-description')}>
                                    <p className={cx('description')}>
                                        Tận hưởng trọn vẹn, không gián đoạn mỗi phút giây cảm xúc khi thưởng thức bộ
                                        phim yến thích.
                                    </p>
                                </div>
                                <a href="">
                                    <div className={cx('btn-register-now')}>Đăng ký ngay</div>
                                </a>
                            </div>
                            <div className={cx('wrap-img')}>
                                <img
                                    className={cx('img')}
                                    src="https://assets.glxplay.io/web/responsive/plain/WEB-GP_1221_TV_KID_500x460.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('partner-page')}>
                    <div className={cx('container-fluid')}>
                        <div className={cx('row')}>
                            <div className={cx('inner-row')}>
                                <div className={cx('description')}>Các đối tác của Galaxy Play</div>
                                <div className={cx('brand-1')}>
                                    <div className={cx('item')}>
                                        <img
                                            src="https://assets.glxplay.io/web/responsive/plain/_Samsung.png"
                                            alt=""
                                            width={'165'}
                                        />
                                    </div>
                                    <div className={cx('item')}>
                                        <img
                                            src="https://assets.glxplay.io/web/responsive/plain/_Sony.png"
                                            alt=""
                                            width={'165'}
                                        />
                                    </div>
                                    <div className={cx('item')}>
                                        <img
                                            src="https://assets.glxplay.io/web/responsive/plain/_TCL.png"
                                            alt=""
                                            width={'165'}
                                        />
                                    </div>
                                    <div className={cx('item')}>
                                        <img
                                            src="https://assets.glxplay.io/web/responsive/plain/_Asanzo.png"
                                            alt=""
                                            width={'165'}
                                        />
                                    </div>
                                    <div className={cx('item')}>
                                        <img
                                            src="https://assets.glxplay.io/web/responsive/plain/_Casper.png"
                                            alt=""
                                            width={'165'}
                                        />
                                    </div>
                                    <div className={cx('item')}>
                                        <img
                                            src="https://assets.glxplay.io/web/responsive/plain/_Skyworth.png"
                                            alt=""
                                            width={'165'}
                                        />
                                    </div>
                                </div>
                                <div className={cx('brand-2')}>
                                    <div className={cx('item')}>
                                        <img
                                            width={'150'}
                                            src="https://assets.glxplay.io/web/responsive/plain/_LG.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className={cx('item')}>
                                        <img
                                            width={'165'}
                                            src="https://assets.glxplay.io/web/responsive/plain/_FPT.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className={cx('item')}>
                                        <img
                                            width={'165'}
                                            src="https://assets.glxplay.io/web/responsive/plain/_MyTV.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className={cx('item')}>
                                        <img
                                            width={'150'}
                                            src="https://assets.glxplay.io/web/responsive/plain/_Mobifone.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className={cx('item')}>
                                        <img
                                            width={'150'}
                                            src="https://assets.glxplay.io/web/responsive/plain/_GooglePlay.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className={cx('item')}>
                                        <img
                                            width={'165'}
                                            src="https://assets.glxplay.io/web/responsive/plain/_AppStore.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className={cx('item')}>
                                        <img
                                            width={'165'}
                                            src="https://assets.glxplay.io/web/responsive/plain/_Dolby.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('landing-page-5')}>
                    <div className={cx('container-fluid')}>
                        <div className={cx('row')}>
                            <div className={cx('inner-row')}>
                                <h2 className={cx('title-landing-page')}>Thoải mái khi xem phim trên TV tại nhà</h2>
                                <div className={cx('description')}>
                                    Đắm chìm trong từng thước phim cùng công nghệ hình ảnh 4K sắc nét và dải âm thanh
                                    Dolby 5.1 sống động duy nhất tại Việt Nam.
                                </div>
                                <a href="">
                                    <div className={cx('btn-register-now')}>Đăng ký ngay</div>
                                </a>
                                <img src="https://assets.glxplay.io/web/responsive/plain/TV-tizen.png" alt="" />
                                <h2 className={cx('title-landing-page')}>
                                    Vũ trụ giải trí điện ảnh, đậm màu sắc Việt. Chất lượng tuyệt đỉnh, trải nghiệm mượt
                                    mà.
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('space')}></div>
            </div>
        </div>
    );
}

export default Home;
