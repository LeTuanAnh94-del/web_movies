import config from '../config';

import Home from '../pages/Home';
import Movies from '../pages/Movies';
import Promotion from '../pages/Promotion';
import RentalMovies from '../pages/RentalMovies';
import SeriesMovies from '../pages/SeriesMovies';
import Storage from '../pages/Storage';
import Support from '../pages/Support';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.movies, component: Movies },
    { path: config.routes.promotion, component: Promotion },
    { path: config.routes.rentalMovies, component: RentalMovies },
    { path: config.routes.seriesMovies, component: SeriesMovies },
    { path: config.routes.storage, component: Storage },
    { path: config.routes.support, component: Support },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
