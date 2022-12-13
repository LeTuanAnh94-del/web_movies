import * as httpRequest from '../../utils/httpRequest';

export const getMoviePopular = async ({ apiKey, language, page }) => {
    try {
        const res = await httpRequest.get('movie/popular', {
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
