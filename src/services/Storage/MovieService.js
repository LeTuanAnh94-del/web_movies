import * as httpRequest from '../../utils/httpRequest';

export const getMovie = async ({
    apiKey,
    region,
    sortBy,
    certificationCountry,
    page,
    releaseDateLte,
    releaseDateGte,
    withReleaseType,
    voteCountGte,
    voteAverageGte,
    voteAverageLte,
    withGenres,
    withRuntimeGte,
    withRuntimeLte,
    withOriginalLanguage,
}) => {
    try {
        const res = await httpRequest.get('discover/movie', {
            params: {
                api_key: apiKey,
                region: region,
                sort_by: sortBy,
                certification_country: certificationCountry,
                page: page,
                'release_date.lte': releaseDateLte,
                'release_date.gte': releaseDateGte,
                with_release_type: withReleaseType,
                'vote_count.gte': voteCountGte,
                'vote_average.gte': voteAverageGte,
                'vote_average.lte': voteAverageLte,
                with_genres: withGenres,
                'with_runtime.gte': withRuntimeGte,
                'with_runtime.lte': withRuntimeLte,
                with_original_language: withOriginalLanguage,
            },
        });
        return res.results;
    } catch (error) {
        console.log(error);
    }
};
