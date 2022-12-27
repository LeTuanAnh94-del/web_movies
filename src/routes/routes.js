import config from '../config';

import Home from '../pages/Home';
import Movies from '../pages/Movies';
import SeriesMovies from '../pages/SeriesMovies';
import Storage from '../pages/Storage';
import Support from '../pages/Support';
import Login from '../pages/Login';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.movies, component: Movies },
    { path: config.routes.seriesMovies, component: SeriesMovies },
    { path: config.routes.storage, component: Storage },
    { path: config.routes.support, component: Support },
    { path: config.routes.login, component: Login, layout: null },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
