import * as httpRequest from '../../utils/httpRequest';

export const getMovieTopRated = async ({ apiKey, language, page }) => {
    try {
        const res = await httpRequest.get('movie/top_rated', {
            params: {
                api_key: apiKey,
                language,
                page,
            },
        });
        return res.results;
    } catch (error) {
        console.log(error);
    }
};
