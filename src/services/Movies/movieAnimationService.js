import * as httpRequest from '../../utils/httpRequest';

export const getMovieAnimation = async ({
    apiKey,
    page,
    certificationCountry,
    region,
    sortBy,
    releaseDateLte,
    releaseDateGte,
    voteAverageGte,
    voteAverageLte,
    voteCountGte,
    withRuntimeGte,
    withRuntimeLte,
    withGenres,
}) => {
    try {
        const res = await httpRequest.get('discover/movie', {
            params: {
                api_key: apiKey,
                page: page,
                certification_country: certificationCountry,
                region,
                sort_by: sortBy,
                with_genres: withGenres,
                'release_date.lte': releaseDateLte,
                'release_date.gte': releaseDateGte,
                'vote_average.gte': voteAverageGte,
                'vote_average.lte': voteAverageLte,
                'vote_count.gte': voteCountGte,
                'with_runtime.gte': withRuntimeGte,
                'with_runtime.lte': withRuntimeLte,
            },
        });
        return res.results;
    } catch (error) {
        console.log(error);
    }
};
