import { faPlay, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import styles from './Storage.module.scss';

const cx = classNames.bind(styles);

function Storage() {
    return (
        <div className={cx('banner')}>
            <div className={cx('banner-slider')}>
                <div className={cx('ribbon-spotlight')}>
                    <div className={cx('stick-list')}>
                        <div className={cx('stick-track')}>
                            <div className={cx('lazy-banner')}>
                                <div className={cx('bg-banner')}>
                                    <img
                                        src="https://assets.glxplay.io/images/w1600/title/red-lantern-villa_web_spotlight_cb4428eb8f93543fa409896e2db42c4c.jpg"
                                        alt="Biệt thự đèn lồng"
                                        className={cx('img-banner')}
                                    />
                                    <div className={cx('banner-gradiant-bottom')}></div>
                                    <div className={cx('banner-gradiant-top')}></div>
                                </div>
                                <div className={cx('logo-content')}>
                                    <img
                                        className={cx('name-img-banner')}
                                        src="https://assets.glxplay.io/images/w400/title/red-lantern-villa_tv_titleSpotlightVn_d613b5c9c72e463a2983766bc3f92919.png"
                                        alt="Biệt thự đèn lồng"
                                    />
                                    <div className={cx('banner-links')}>
                                        <div className={cx('link-register')}>
                                            <a href="" className={cx('register')}>
                                                <svg
                                                    className={cx('icon-rental')}
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm0 1.5C6.201 1.5 1.5 6.201 1.5 12S6.201 22.5 12 22.5 22.5 17.799 22.5 12 17.799 1.5 12 1.5zm5.436 14.592a.34.34 0 0 1 .34.34v.82a.34.34 0 0 1-.34.34H6.453a.34.34 0 0 1-.34-.34v-.82a.34.34 0 0 1 .34-.34h10.983zM12.11 5.038a.34.34 0 0 1 .134.13l2.883 5.009 3.331-2.466a.34.34 0 0 1 .538.335l-1.164 6.422a.34.34 0 0 1-.335.28H6.409a.34.34 0 0 1-.336-.285l-1.07-6.441a.34.34 0 0 1 .537-.331l3.41 2.486 2.7-5.001a.34.34 0 0 1 .46-.138zm-.129 2.68L9.454 12.4l-2.506-1.827.444 2.674h9.136l.469-2.589-2.33 1.725-2.686-4.665z"
                                                        fill="#404446"
                                                        fillRule="evenodd"
                                                    />
                                                </svg>{' '}
                                                <div className={cx('title-register')}>&nbsp; Đăng ký gói</div>
                                            </a>
                                        </div>
                                        <div className={cx('link-trailer')}>
                                            <a href="" className={cx('watch-trailer')}>
                                                <div className={cx('play-video')}>
                                                    <FontAwesomeIcon icon={faVideo} className={cx('icon-video')} />
                                                </div>
                                                <div className={cx('title-watch')}>Xem trailer</div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className={cx('banner-description')}>
                                        Dựa trên vụ án chấn động có thật về kẻ bắt cóc và nạn nhân mắc hội chứng
                                        Stockholm, phim xoay quanh gã dược sĩ lập dị giam giữ 4 cô gái làm nô lệ trong
                                        tầng hầm ngôi biệt thự treo đầy đèn lồng đỏ.
                                        <a href="" className={cx('detail')}>
                                            Xem chi tiết
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('lazy-banner')}>
                                <div className={cx('bg-banner')}>
                                    <img
                                        src="https://assets.glxplay.io/images/w1600/title/warm-bodies_web_spotlight_1e8c20f680024f0c7a7de7a4044b9ea9.jpg"
                                        alt="Biệt thự đèn lồng"
                                        className={cx('img-banner')}
                                    />
                                    <div className={cx('banner-gradiant-bottom')}></div>
                                    <div className={cx('banner-gradiant-top')}></div>
                                </div>
                                <div className={cx('logo-content')}>
                                    <img
                                        className={cx('name-img-banner')}
                                        src="https://assets.glxplay.io/images/w400/title/warm-bodies_web_titleSpotlightEn_b748872abb13cf78f1a05a23a90f8508.png"
                                        alt="Biệt thự đèn lồng"
                                    />
                                    <div className={cx('banner-links')}>
                                        <div className={cx('link-register')}>
                                            <a href="" className={cx('register')}>
                                                <svg
                                                    className={cx('icon-register')}
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm0 1.5C6.201 1.5 1.5 6.201 1.5 12S6.201 22.5 12 22.5 22.5 17.799 22.5 12 17.799 1.5 12 1.5zm5.436 14.592a.34.34 0 0 1 .34.34v.82a.34.34 0 0 1-.34.34H6.453a.34.34 0 0 1-.34-.34v-.82a.34.34 0 0 1 .34-.34h10.983zM12.11 5.038a.34.34 0 0 1 .134.13l2.883 5.009 3.331-2.466a.34.34 0 0 1 .538.335l-1.164 6.422a.34.34 0 0 1-.335.28H6.409a.34.34 0 0 1-.336-.285l-1.07-6.441a.34.34 0 0 1 .537-.331l3.41 2.486 2.7-5.001a.34.34 0 0 1 .46-.138zm-.129 2.68L9.454 12.4l-2.506-1.827.444 2.674h9.136l.469-2.589-2.33 1.725-2.686-4.665z"
                                                        fill="#404446"
                                                        fillRule="evenodd"
                                                    />
                                                </svg>{' '}
                                                <div className={cx('title-register')}>Đăng ký gói</div>
                                            </a>
                                        </div>
                                        <div className={cx('link-trailer')}>
                                            <a href="" className={cx('watch-trailer')}>
                                                <div className={cx('play-video')}>
                                                    <FontAwesomeIcon icon={faVideo} className={cx('icon-video')} />
                                                </div>
                                                <div className={cx('title-watch')}>Xem trailer</div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className={cx('banner-description')}>
                                        R là một thây ma khác thường khi có tình cảm với một cô gái và sẵn sàng liều
                                        mình giải cứu cô. Liệu tình yêu của họ có đủ sức mạnh để vượt qua sự đối lập và
                                        cách biệt của hai thế giới?
                                        <a href="" className={cx('detail')}>
                                            Xem chi tiết
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('lazy-banner')}>
                                <div className={cx('bg-banner')}>
                                    <img
                                        src="https://assets.glxplay.io/images/w1600/title/nope_web_spotlight_d1a93491c7ca274a08879cfb748b37c0.jpg"
                                        alt="Biệt thự đèn lồng"
                                        className={cx('img-banner')}
                                    />
                                    <div className={cx('banner-gradiant-bottom')}></div>
                                    <div className={cx('banner-gradiant-top')}></div>
                                </div>
                                <div className={cx('logo-content')}>
                                    <img
                                        className={cx('name-img-banner')}
                                        src="https://assets.glxplay.io/images/w400/title/nope_web_titleSpotlightEn_9d302f90f2c158471cfb3e11134ae191.png"
                                        alt="Biệt thự đèn lồng"
                                    />
                                    <div className={cx('banner-links')}>
                                        <div className={cx('link-register')}>
                                            <a href="" className={cx('register')}>
                                                <div>
                                                    <FontAwesomeIcon icon={faPlay} className={cx('icon-video')} />
                                                </div>
                                                <div className={cx('title-register')}>&nbsp;Thuê phim 29.000đ</div>
                                            </a>
                                        </div>
                                        <div className={cx('link-trailer')}>
                                            <a href="" className={cx('watch-trailer')}>
                                                <div className={cx('play-video')}>
                                                    <FontAwesomeIcon icon={faVideo} className={cx('icon-video')} />
                                                </div>
                                                <div className={cx('title-watch')}>Xem trailer</div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className={cx('banner-description')}>
                                        Vẫn mang phong cách bí ẩn đặc trưng, đạo diễn "Get Out" trở lại với tác phẩm
                                        kinh dị sau ba năm vắng bóng. Trên trời xuất hiện một vật thể siêu nhiên, làm
                                        thay đổi số phận của hai anh em Haywood.
                                        <a href="" className={cx('detail')}>
                                            Xem chi tiết
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('lazy-banner')}>
                                <div className={cx('bg-banner')}>
                                    <img
                                        src="https://assets.glxplay.io/images/w1600/title/the-outfit_web_spotlight_0bdfb0c1015e56c934cd9fc712ba6fff.jpg"
                                        alt="Biệt thự đèn lồng"
                                        className={cx('img-banner')}
                                    />
                                    <div className={cx('banner-gradiant-bottom')}></div>
                                    <div className={cx('banner-gradiant-top')}></div>
                                </div>
                                <div className={cx('logo-content')}>
                                    <img
                                        className={cx('name-img-banner')}
                                        src="https://assets.glxplay.io/images/w400/title/the-outfit_web_titleSpotlightEn_99b8e67bda631a3f5e0701b6b9923eb0.png"
                                        alt="Biệt thự đèn lồng"
                                    />
                                    <div className={cx('banner-links')}>
                                        <div className={cx('link-register')}>
                                            <a href="" className={cx('register')}>
                                                <div>
                                                    <FontAwesomeIcon icon={faPlay} className={cx('icon-video')} />
                                                </div>
                                                <div className={cx('title-register')}>&nbsp;Thuê phim 29.000đ</div>
                                            </a>
                                        </div>
                                        <div className={cx('link-trailer')}>
                                            <a href="" className={cx('watch-trailer')}>
                                                <div className={cx('play-video')}>
                                                    <FontAwesomeIcon icon={faVideo} className={cx('icon-video')} />
                                                </div>
                                                <div className={cx('title-watch')}>Xem trailer</div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className={cx('banner-description')}>
                                        Thất vọng về trào lưu mới, một thợ may bậc thầy từ bỏ kinh đô thời trang để tới
                                        thị trấn nhỏ ở Chicago sinh sống. Cũng từ đây, ông vô tình bị kéo vào trò chơi
                                        chết chóc của thế giới ngầm.
                                        <a href="" className={cx('detail')}>
                                            Xem chi tiết
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('lazy-banner')}>
                                <div className={cx('bg-banner')}>
                                    <img
                                        src="https://assets.glxplay.io/images/w1600/title/the-brilliant-darkness_web_spotlight_9408ac320749b86bfd1432d39f82205d.jpg"
                                        alt="Biệt thự đèn lồng"
                                        className={cx('img-banner')}
                                    />
                                    <div className={cx('banner-gradiant-bottom')}></div>
                                    <div className={cx('banner-gradiant-top')}></div>
                                </div>
                                <div className={cx('logo-content')}>
                                    <img
                                        className={cx('name-img-banner')}
                                        src="https://assets.glxplay.io/images/w400/title/the-brilliant-darkness_web_titleSpotlightEn_66d74e76b9729ecc85bfac6dc23a4116.png"
                                        alt="Biệt thự đèn lồng"
                                    />
                                    <div className={cx('banner-links')}>
                                        <div className={cx('link-register')}>
                                            <a href="" className={cx('register')}>
                                                <svg
                                                    className={cx('icon-rental')}
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm0 1.5C6.201 1.5 1.5 6.201 1.5 12S6.201 22.5 12 22.5 22.5 17.799 22.5 12 17.799 1.5 12 1.5zm5.436 14.592a.34.34 0 0 1 .34.34v.82a.34.34 0 0 1-.34.34H6.453a.34.34 0 0 1-.34-.34v-.82a.34.34 0 0 1 .34-.34h10.983zM12.11 5.038a.34.34 0 0 1 .134.13l2.883 5.009 3.331-2.466a.34.34 0 0 1 .538.335l-1.164 6.422a.34.34 0 0 1-.335.28H6.409a.34.34 0 0 1-.336-.285l-1.07-6.441a.34.34 0 0 1 .537-.331l3.41 2.486 2.7-5.001a.34.34 0 0 1 .46-.138zm-.129 2.68L9.454 12.4l-2.506-1.827.444 2.674h9.136l.469-2.589-2.33 1.725-2.686-4.665z"
                                                        fill="#404446"
                                                        fillRule="evenodd"
                                                    />
                                                </svg>{' '}
                                                <div className={cx('title-register')}>Đăng ký gói</div>
                                            </a>
                                        </div>
                                        <div className={cx('link-trailer')}>
                                            <a href="" className={cx('watch-trailer')}>
                                                <div className={cx('play-video')}>
                                                    <FontAwesomeIcon icon={faVideo} className={cx('icon-video')} />
                                                </div>
                                                <div className={cx('title-watch')}>Xem trailer</div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className={cx('banner-description')}>
                                        Đám tang người ông vừa qua đời của gia đình Xuân Thanh tưởng chừng sẽ mang không
                                        khí u uất, thế nhưng vô tình lại trở thành nơi những bí mật kinh khủng nhất được
                                        phanh phui.
                                        <a href="" className={cx('detail')}>
                                            Xem chi tiết
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('wrap-slide')}>
                    <div className="wrap-dots">
                        <ul className={cx('slick-dots')}>
                            <li className={cx('slick-active')}>
                                <button className={cx('btn-slick-active')}></button>
                            </li>
                            <li className={cx('slick')}>
                                <button className={cx('btn-slick')}></button>
                            </li>
                            <li className={cx('slick')}>
                                <button className={cx('btn-slick')}></button>
                            </li>
                            <li className={cx('slick')}>
                                <button className={cx('btn-slick')}></button>
                            </li>
                            <li className={cx('slick')}>
                                <button className={cx('btn-slick')}></button>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('wrap-arrows')}>
                        <div className={cx('prev-arrow')}>
                            <svg
                                className={cx('arrow')}
                                fill="#F2F2F2"
                                xmlns="http://www.w3.org/2000/svg"
                                width="36"
                                height="36"
                                viewBox="0 0 36 36"
                            >
                                <path
                                    d="M18 1.875c8.906 0 16.125 7.22 16.125 16.125 0 8.906-7.22 16.125-16.125 16.125-8.906 0-16.125-7.22-16.125-16.125C1.875 9.094 9.095 1.875 18 1.875zm0 2.25C10.337 4.125 4.125 10.337 4.125 18S10.337 31.875 18 31.875 31.875 25.663 31.875 18 25.663 4.125 18 4.125zM10.875 18v-.036l.006-.078-.006.114c0-.06.005-.12.014-.177l.01-.051c.024-.118.066-.23.124-.33l.026-.044.043-.063.004-.004.01-.015a1.3 1.3 0 01.083-.096l.016-.015 6-6a1.125 1.125 0 011.7 1.464l-.11.126-4.079 4.08H24a1.125 1.125 0 01.153 2.24l-.153.01h-9.284l4.08 4.08c.399.399.435 1.024.108 1.464l-.109.126c-.399.4-1.024.436-1.464.11l-.126-.11-6-6-.018-.018a.725.725 0 01-.045-.05l.063.068a1.155 1.155 0 01-.104-.118l-.026-.036a.943.943 0 01-.04-.062l-.033-.06-.02-.04a.538.538 0 01-.024-.055.983.983 0 01-.07-.252l-.005-.04a.62.62 0 01-.006-.062l-.002-.052V18z"
                                    fillRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className={cx('next-arrow')}>
                            <svg
                                className={cx('arrow')}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#F2F2F2"
                                width="36"
                                height="36"
                                viewBox="0 0 36 36"
                            >
                                <path
                                    d="M18 1.875c8.906 0 16.125 7.22 16.125 16.125 0 8.906-7.22 16.125-16.125 16.125-8.906 0-16.125-7.22-16.125-16.125C1.875 9.094 9.095 1.875 18 1.875zm0 2.25C10.337 4.125 4.125 10.337 4.125 18S10.337 31.875 18 31.875 31.875 25.663 31.875 18 25.663 4.125 18 4.125zm.67 6.97l.125.11 6 6 .018.018c.016.016.03.032.045.05l-.063-.068c.038.037.072.077.104.118l.026.036c.014.02.027.04.04.062l.033.06.02.04a.538.538 0 01.024.055 1.185 1.185 0 01.07.252l.005.04c.005.043.008.087.008.132l-.002.065c0 .016-.002.032-.004.048l.006-.113c0 .06-.005.12-.014.177l-.01.051a1.034 1.034 0 01-.15.374c-.014.021-.027.041-.042.06l-.005.007-.01.015a1.3 1.3 0 01-.083.096l-.016.015-6 6a1.125 1.125 0 01-1.7-1.464l.11-.126 4.078-4.08H12a1.125 1.125 0 01-.153-2.24l.153-.01h9.283l-4.078-4.08a1.125 1.125 0 01-.11-1.464l.11-.126a1.125 1.125 0 011.464-.11z"
                                    fillRule="evenodd"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Storage;
