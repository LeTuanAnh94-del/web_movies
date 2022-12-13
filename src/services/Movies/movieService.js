import * as httpRequest from '../../utils/httpRequest';

export const getMovies = async ({ apiKey, language, page }) => {
    try {
        const res = await httpRequest.get('movie/now_playing', {
            params: {
                api_key: apiKey,
                language,
                page,
            },
        });
        return res.results.slice(0, 5);
    } catch (error) {
        console.log(error);
    }
};
