import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import styles from './Movies.module.scss';
import * as movieService from '../../services/movieService';
import * as moviePlayingService from '../../services/moviePlayingService'
import Banner from '../../layouts/components/Banner';
import MovieSlider from '../../layouts/components/MovieSlider';

const cx = classNames.bind(styles);
const API_KEY = '7075a527c5f87215b1ec4cffdd7567a4';
const LANGUAGE = 'en-US';

function Movies() {
    const [renderMovies, setRenderMovies] = useState([]);
    const [moviePlaying, setMoviePlaying] = useState([]);

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

    return (
        <div>
            <Banner data={renderMovies} />
            <MovieSlider data = {moviePlaying}/>
        </div>
    );
}

export default Movies;
