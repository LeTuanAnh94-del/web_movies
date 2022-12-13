import * as httpRequest from '../../utils/httpRequest';

export const getMovieUpcoming = async ({ apiKey, language, page }) => {
    try {
        const res = await httpRequest.get('movie/upcoming', {
            params: {
                api_key: apiKey,
                language: language,
                page: page,
            },
        });
        return res.results;
    } catch (error) {
        console.log(error);
    }
};
