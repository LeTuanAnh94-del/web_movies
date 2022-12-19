import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import MovieSlider from '../../layouts/components/MovieSlider';
import Banner from '../../layouts/components/Banner';
import Category from '../../components/Category';
import * as BannerService from '../../services/SeriesMovies/BannerService';
import * as PopularService from '../../services/SeriesMovies/PopularService';
import * as OnTheAirService from '../../services/SeriesMovies/OnTheAirService';
import * as GenreService from '../../services/SeriesMovies/GenreService';
import styles from './SeriesMovies.module.scss';

const API_KEY = '7075a527c5f87215b1ec4cffdd7567a4';

const cx = classNames.bind(styles);

function SeriesMovies() {
    const [banner, setBanner] = useState([]);
    const [seriesMoviePopular, setSeriesMoviePopular] = useState([]);
    const [seriesMovieOnTheAir, setSeriesMovieOnTheAir] = useState([]);
    const [seriesMovieGenre, setSeriesMovieGenre] = useState([]);

    useEffect(() => {
        BannerService.getBanner({ apiKey: API_KEY, page: 1, language: 'en-US' })
            .then((data) => {
                setBanner((prevBanner) => [...prevBanner, ...data]);
            })
            .catch((error) => console.log(error));
    }, []);
    useEffect(() => {
        PopularService.getSeriesMoviePopular({ apiKey: API_KEY, page: 1, language: 'en-US' })
            .then((data) => {
                setSeriesMoviePopular((prevSeriesMoviePopular) => [...prevSeriesMoviePopular, ...data]);
            })
            .catch((error) => console.log(error));
    }, []);
    useEffect(() => {
        OnTheAirService.getSeriesMovieOnTheAir({ apiKey: API_KEY, page: 1, language: 'en-US' })
            .then((data) => {
                setSeriesMovieOnTheAir((prevSeriesMovieOnTheAir) => [...prevSeriesMovieOnTheAir, ...data]);
            })
            .catch((error) => console.log(error));
    }, []);
    useEffect(() => {
        GenreService.getSeriesMovieGenre({ apiKey: API_KEY, language: 'en-US' })
            .then((data) => {
                setSeriesMovieGenre((prevSeriesMovieGenre) => [...prevSeriesMovieGenre, ...data]);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div>
            <Banner data={banner} />
            <Category data={seriesMovieGenre} label="Phim truyền hình" />
            <MovieSlider data={seriesMoviePopular} label="Phim hot" />
            <MovieSlider data={seriesMovieOnTheAir} label="Phim ra mắt tuần tới" />
            <div className={cx('container')}>
                <ul></ul>
            </div>
            <div className={cx('content-walls')}></div>
            <div className={cx('space')}></div>
        </div>
    );
}

export default SeriesMovies;
