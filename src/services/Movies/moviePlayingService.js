import * as httpRequest from '../../utils/httpRequest';

export const getMoviePlaying = async ({ apiKey, language, page }) => {
    try {
        const res = await httpRequest.get('movie/now_playing', {
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
