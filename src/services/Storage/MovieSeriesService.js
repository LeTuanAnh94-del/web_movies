import * as httpRequest from '../../utils/httpRequest';

export const getMovieSeriesService = async ({
    apiKey,
    region,
    sortBy,
    airDateGte,
    airDateLte,
    page,
    voteAverageGte,
    voteCountGte,
    withRuntimeGte,
    withRuntimeLte,
    withOriginalLanguage,
    withGenres,
}) => {
    try {
        const res = await httpRequest.get('discover/tv', {
            params: {
                api_key: apiKey,
                region: region,
                sort_by: sortBy,
                'air_date.gte': airDateGte,
                'air_date.lte': airDateLte,
                page: page,
                'vote_average.gte': voteAverageGte,
                'vote_count.gte': voteCountGte,
                'with_runtime.gte': withRuntimeGte,
                'with_runtime.lte': withRuntimeLte,
                with_original_Language: withOriginalLanguage,
                with_genres: withGenres,
            },
        });
        return res.results;
    } catch (error) {
        console.log(error);
    }
};
