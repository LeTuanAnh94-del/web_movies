import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import Banner from '../../layouts/components/Banner';
import MovieSlider from '../../layouts/components/MovieSlider';
import * as BannerService from '../../services/Storage/BannerService';
import * as TrendingService from '../../services/Storage/TrendingService';
import * as MovieSeriesService from '../../services/Storage/MovieSeriesService';
import * as MovieService from '../../services/Storage/MovieService';
import * as GenreService from '../../services/Storage/GenreService';
import styles from './Storage.module.scss';
import BackgroundSlider from '../../layouts/components/BackgroundSlider';

const API_KEY = '7075a527c5f87215b1ec4cffdd7567a4';
const SORT_BY_POPULAR = 'popularity.desc';
const SORT_BY_TOP_RATED = 'vote_average.desc';

const cx = classNames.bind(styles);

function Storage() {
    const [banner, setBanner] = useState([]);
    const [trending, setTrending] = useState([]);
    const [koreanMovie, setKoreanMovie] = useState([]);
    const [vietNamMovie, setVietNamMovie] = useState([]);
    const [animeSeries, setAnimeSeries] = useState([]);
    const [animationMovies, setAnimationMovies] = useState([]);
    const [americanActionMovie, setAmericanActionMovie] = useState([]);
    const [americanHorrorMovie, setAmericanHorrorMovie] = useState([]);
    const [americanRomancerMovie, setAmericanRomanceMovie] = useState([]);
    const [vietNamClassicMovie, setVietNamClassicMovie] = useState([]);
    const [upcomingMovie, setUpcomingMovie] = useState([]);
    const [genre, setGenre] = useState([]);

    useEffect(() => {
        BannerService.getBanner({ apiKey: API_KEY })
            .then((data) => {
                setBanner((prevBanner) => [...prevBanner, ...data]);
            })
            .catch((error) => console.log(error));
    }, []);
    useEffect(() => {
        TrendingService.getTrending({ apiKey: API_KEY })
            .then((data) => {
                setTrending((prevBanner) => [...prevBanner, ...data]);
            })
            .catch((error) => console.log(error));
    }, []);
    useEffect(() => {
        MovieService.getMovie({
            apiKey: API_KEY,
            region: 'KR',
            sortBy: SORT_BY_POPULAR,
            certificationCountry: 'VN',
            page: 1,
            releaseDateGte: '2000-01-01',
            releaseDateLte: '2022-12-31',
            withReleaseType: '1 | 2 | 3 | 4 | 5 | 6',
            voteCountGte: 500,
            voteAverageGte: 0,
            voteAverageLte: 10,
            withRuntimeGte: 0,
            withRuntimeLte: 400,
            withOriginalLanguage: 'ko',
        })
            .then((data) => {
                setKoreanMovie((prevKoreanMovie) => [...prevKoreanMovie, ...data]);
            })
            .catch((error) => console.log(error));
    }, []);
    useEffect(() => {
        MovieService.getMovie({
            apiKey: API_KEY,
            region: 'VN',
            sortBy: SORT_BY_TOP_RATED,
            certificationCountry: 'VN',
            page: 1,
            releaseDateGte: '2000-01-01',
            releaseDateLte: '2022-12-31',
            withReleaseType: '2 | 3',
            voteCountGte: 0,
            voteAverageGte: 0,
            voteAverageLte: 10,
            withRuntimeGte: 0,
            withRuntimeLte: 400,
            withOriginalLanguage: 'vi',
        })
            .then((data) => {
                setVietNamMovie((prevVietNamMovie) => [...prevVietNamMovie, ...data]);
            })
            .catch((error) => console.log(error));
    }, []);
    useEffect(() => {
        MovieSeriesService.getMovieSeriesService({
            apiKey: API_KEY,
            region: 'JP',
            sortBy: SORT_BY_TOP_RATED,
            airDateGte: '2000-01-01',
            airDateLte: '2022-12-31',
            page: 1,
            voteAverageGte: 0,
            voteCountGte: 500,
            withRuntimeGte: 0,
            withRuntimeLte: 400,
            withOriginalLanguage: 'ja',
            withGenres: 16,
        })
            .then((data) => {
                setAnimeSeries((prevAnimeSeries) => [...prevAnimeSeries, ...data]);
            })
            .catch((error) => console.log(error));
    }, []);
    useEffect(() => {
        MovieService.getMovie({
            apiKey: API_KEY,
            sortBy: SORT_BY_TOP_RATED,
            certificationCountry: 'VN',
            page: 1,
            releaseDateGte: '2000-01-01',
            releaseDateLte: '2022-12-31',
            withReleaseType: '1|2|3|4|5|6',
            voteCountGte: 500,
            voteAverageGte: 0,
            voteAverageLte: 10,
            withGenres: 16,
            withRuntimeGte: 0,
            withRuntimeLte: 400,
        })
            .then((data) => {
                setAnimationMovies((prevAnimationMovie) => [...prevAnimationMovie, ...data]);
            })
            .catch((error) => console.log(error));
    }, []);
    useEffect(() => {
        MovieService.getMovie({
            apiKey: API_KEY,
            region: 'US',
            sortBy: SORT_BY_POPULAR,
            certificationCountry: 'VN',
            page: 1,
            releaseDateGte: '2000-01-01',
            releaseDateLte: '2022-12-31',
            withReleaseType: '2|3',
            voteCountGte: 500,
            voteAverageGte: 0,
            voteAverageLte: 10,
            withGenres: 28,
            withRuntimeGte: 0,
            withRuntimeLte: 400,
            withOriginalLanguage: 'en',
        })
            .then((data) => {
                setAmericanActionMovie((prevAmericanActionMovie) => [...prevAmericanActionMovie, ...data]);
            })
            .catch((error) => console.log(error));
    }, []);
    useEffect(() => {
        MovieService.getMovie({
            apiKey: API_KEY,
            region: 'US',
            sortBy: SORT_BY_POPULAR,
            certificationCountry: 'VN',
            page: 1,
            releaseDateGte: '2000-01-01',
            releaseDateLte: '2022-12-31',
            withReleaseType: '2|3',
            voteCountGte: 500,
            voteAverageGte: 0,
            voteAverageLte: 10,
            withGenres: 27,
            withRuntimeGte: 0,
            withRuntimeLte: 400,
            withOriginalLanguage: 'en',
        })
            .then((data) => {
                setAmericanHorrorMovie((prevAmericanHorrorMovie) => [...prevAmericanHorrorMovie, ...data]);
            })
            .catch((error) => console.log(error));
    }, []);
    useEffect(() => {
        MovieService.getMovie({
            apiKey: API_KEY,
            region: 'US',
            sortBy: SORT_BY_POPULAR,
            certificationCountry: 'VN',
            page: 1,
            releaseDateGte: '2000-01-01',
            releaseDateLte: '2022-12-31',
            withReleaseType: '2|3',
            voteCountGte: 500,
            voteAverageGte: 0,
            voteAverageLte: 10,
            withGenres: '35, 10749',
            withRuntimeGte: 0,
            withRuntimeLte: 400,
            withOriginalLanguage: 'en',
        })
            .then((data) => {
                setAmericanRomanceMovie((prevAmericanRomanceMovie) => [...prevAmericanRomanceMovie, ...data]);
            })
            .catch((error) => console.log(error));
    }, []);
    useEffect(() => {
        MovieService.getMovie({
            apiKey: API_KEY,
            region: 'VN',
            sortBy: SORT_BY_POPULAR,
            certificationCountry: 'VN',
            page: 1,
            releaseDateLte: '1999-12-31',
            withReleaseType: '1|2|3|4|5|6',
            voteCountGte: 0,
            voteAverageGte: 0,
            voteAverageLte: 10,
            withRuntimeGte: 0,
            withRuntimeLte: 400,
            withOriginalLanguage: 'vi',
        })
            .then((data) => {
                setVietNamClassicMovie((prevVietNamClassicMovie) => [...prevVietNamClassicMovie, ...data]);
            })
            .catch((error) => console.log(error));
    }, []);
    useEffect(() => {
        MovieService.getMovie({
            apiKey: API_KEY,
            sortBy: SORT_BY_POPULAR,
            certificationCountry: 'VN',
            page: 1,
            releaseDateGte: '2022-12-21',
            releaseDateLte: '2023-01-11',
            withReleaseType: '2|3',
            voteCountGte: 0,
            voteAverageGte: 0,
            voteAverageLte: 10,
            withRuntimeGte: 0,
            withRuntimeLte: 400,
        })
            .then((data) => {
                setUpcomingMovie((prevUpcomingMovie) => [...prevUpcomingMovie, ...data]);
            })
            .catch((error) => console.log(error));
    }, []);
    useEffect(() => {
        GenreService.getGenre({
            apiKey: API_KEY,
            language: 'en-US',
        })
            .then((data) => {
                setGenre((prevGenre) => [...prevGenre, ...data]);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div>
            <Banner data={banner} />
            <MovieSlider data={trending} label="Phim Hot" />
            <MovieSlider data={koreanMovie} label="Phim Xứ Kim Chi" />
            <MovieSlider data={vietNamMovie} label="Phim Việt Chiếu Rạp Hay ất" />
            <MovieSlider data={animeSeries} label="Anime Không Thể Bỏ Lỡ" />
            <MovieSlider data={animationMovies} label="Dành Cho Gia Đình" />
            <MovieSlider data={americanActionMovie} label="Hành Động Hollywood" />
            <MovieSlider data={americanHorrorMovie} label="Kinh Dị Hollywood" />
            <MovieSlider data={americanRomancerMovie} label="Hài, Lãng Mạn Hollywood" />
            <MovieSlider data={vietNamClassicMovie} label="Top Phim Việt Kinh Điển" />
            <BackgroundSlider data={genre} label="Khám Phá" />
            <MovieSlider data={upcomingMovie} label="Phim Sắp Chiếu" />
            <div className={cx('container')}>
                <ul></ul>
            </div>
            <div className={cx('content-walls')}></div>
            <div className={cx('space')}></div>
        </div>
    );
}

export default Storage;
