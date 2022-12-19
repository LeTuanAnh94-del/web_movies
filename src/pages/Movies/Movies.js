import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import styles from './Movies.module.scss';
import * as movieService from '../../services//Movies/movieService';
import * as moviePlayingService from '../../services/Movies/moviePlayingService';
import * as movieUpcomingService from '../../services/Movies/movieUpcomingService';
import * as moviePopularService from '../../services/Movies/moviePopularService';
import * as movieTopRatedService from '../../services/Movies/movieTopRatedService';
import * as movieAnimationService from '../../services/Movies/movieAnimationService';
import * as movieRomanceService from '../../services/Movies/movieRomanceService';
import * as movieActionService from '../../services/Movies/movieActionService';
import * as movieHorrorService from '../../services/Movies/movieHorrorService';
import * as genreService from '../../services/Movies/GenreService';
import Banner from '../../layouts/components/Banner';
import MovieSlider from '../../layouts/components/MovieSlider';
import Category from '../../components/Category';

const cx = classNames.bind(styles);
const API_KEY = '7075a527c5f87215b1ec4cffdd7567a4';
const LANGUAGE = 'en-US';
const SORT_BY = 'popularity.desc';

function Movies() {
    const [renderMovies, setRenderMovies] = useState([]);
    const [moviePlaying, setMoviePlaying] = useState([]);
    const [movieUpcoming, setMovieUpcoming] = useState([]);
    const [moviePopular, setMoviePopular] = useState([]);
    const [movieTopRated, setMovieTopRated] = useState([]);
    const [movieAnimation, setMovieAnimation] = useState([]);
    const [movieAction, setMovieAction] = useState([]);
    const [movieRomance, setMovieRomance] = useState([]);
    const [movieHorror, setMovieHorror] = useState([]);
    const [genre, setGenre] = useState([]);

    useEffect(() => {
        movieService
            .getMovies({ apiKey: API_KEY, language: LANGUAGE, page: 1 })
            .then((data) => {
                setRenderMovies((prevMovie) => [...prevMovie, ...data]);
            })
            .catch((error) => console.log(error));
    }, []);
    useEffect(() => {
        moviePlayingService
            .getMoviePlaying({ apiKey: API_KEY, language: LANGUAGE, page: 1 })
            .then((data) => {
                setMoviePlaying((prevMovie) => [...prevMovie, ...data]);
            })
            .catch((error) => console.log(error));
    }, []);
    useEffect(() => {
        movieUpcomingService
            .getMovieUpcoming({ apiKey: API_KEY, language: LANGUAGE, page: 1 })
            .then((data) => {
                setMovieUpcoming((prevMovie) => [...prevMovie, ...data]);
            })
            .catch((error) => console.log(error));
    }, []);
    useEffect(() => {
        moviePopularService
            .getMoviePopular({ apiKey: API_KEY, language: LANGUAGE, page: 1 })
            .then((data) => {
                setMoviePopular((prevMovie) => [...prevMovie, ...data]);
            })
            .catch((error) => console.log(error));
    }, []);
    useEffect(() => {
        movieTopRatedService
            .getMovieTopRated({ apiKey: API_KEY, language: LANGUAGE, page: 1 })
            .then((data) => {
                setMovieTopRated((prevMovie) => [...prevMovie, ...data]);
            })
            .catch((error) => console.log(error));
    }, []);
    useEffect(() => {
        genreService
            .getGenre({ apiKey: API_KEY, language: LANGUAGE })
            .then((data) => {
                setGenre((prevGenre) => [...prevGenre, ...data]);
            })
            .catch((error) => console.log(error));
    }, []);
    useEffect(() => {
        movieAnimationService
            .getMovieAnimation({
                apiKey: API_KEY,
                page: 1,
                certificationCountry: 'VN',
                region: 'VN',
                sortBy: SORT_BY,
                withGenres: 16,
                releaseDateLte: '2022-12-31',
                releaseDateGte: '2001-01-01',
                voteAverageGte: 0,
                voteAverageLte: 10,
                voteCountGte: 500,
                withRuntimeGte: 0,
                withRuntimeLte: 400,
            })
            .then((data) => {
                setMovieAnimation((prevMovie) => [...prevMovie, ...data]);
            })
            .catch((error) => console.log(error));
    }, []);
    useEffect(() => {
        movieActionService
            .getMovieAction({
                apiKey: API_KEY,
                page: 1,
                certificationCountry: 'VN',
                region: 'US',
                sortBy: SORT_BY,
                withReleaseType: 2 | 3,
                withGenres: 28,
                releaseDateLte: '2022-12-31',
                releaseDateGte: '2001-01-01',
                voteAverageGte: 0,
                voteAverageLte: 10,
                voteCountGte: 500,
                withRuntimeGte: 0,
                withRuntimeLte: 400,
            })
            .then((data) => {
                setMovieAction((prevMovie) => [...prevMovie, ...data]);
            })
            .catch((error) => console.log(error));
    }, []);
    useEffect(() => {
        movieRomanceService
            .getMovieRomance({
                apiKey: API_KEY,
                page: 1,
                certificationCountry: 'VN',
                region: 'US',
                sortBy: SORT_BY,
                withReleaseType: 2 | 3,
                withGenres: 10749,
                releaseDateLte: '2022-12-31',
                releaseDateGte: '2001-01-01',
                voteAverageGte: 0,
                voteAverageLte: 10,
                voteCountGte: 500,
                withRuntimeGte: 0,
                withRuntimeLte: 400,
            })
            .then((data) => {
                setMovieRomance((prevMovie) => [...prevMovie, ...data]);
            })
            .catch((error) => console.log(error));
    }, []);
    useEffect(() => {
        movieHorrorService
            .getMovieHorror({
                apiKey: API_KEY,
                page: 1,
                certificationCountry: 'VN',
                region: 'US',
                sortBy: SORT_BY,
                withReleaseType: 2 | 3,
                withGenres: 27,
                releaseDateLte: '2022-12-31',
                releaseDateGte: '2001-01-01',
                voteAverageGte: 0,
                voteAverageLte: 10,
                voteCountGte: 500,
                withRuntimeGte: 0,
                withRuntimeLte: 400,
            })
            .then((data) => {
                setMovieHorror((prevMovie) => [...prevMovie, ...data]);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div>
            <Banner data={renderMovies} />
            <Category data={genre} label="Phim điện ảnh" />
            <MovieSlider data={moviePlaying} label="Phim đang chiếu" />
            <MovieSlider data={movieUpcoming} label="Phim mới cập nhật" />
            <MovieSlider data={moviePopular} label="Phim hot" />
            <MovieSlider data={movieTopRated} label="Phim được đánh giá cao" />
            <MovieSlider data={movieAnimation} label="Phim hoạt hình" />
            <MovieSlider data={movieAction} label="Hành động" />
            <MovieSlider data={movieRomance} label="Lãng mạn" />
            <MovieSlider data={movieHorror} label="Kinh dị" />
            <div className={cx('container')}>
                <ul></ul>
            </div>
            <div className={cx('content-walls')}></div>
            <div className={cx('space')}></div>
        </div>
    );
}

export default Movies;
