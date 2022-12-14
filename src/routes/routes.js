import config from '../config';

import Home from '../pages/Home';
import Movies from '../pages/Movies';
import SeriesMovies from '../pages/SeriesMovies';
import Storage from '../pages/Storage';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.movies, component: Movies },
    { path: config.routes.seriesMovies, component: SeriesMovies },
    { path: config.routes.storage, component: Storage },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
