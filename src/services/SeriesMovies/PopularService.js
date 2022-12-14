import * as httpRequest from '../../utils/httpRequest';

export const getSeriesMoviePopular = async ({ apiKey, language, page }) => {
    try {
        const res = await httpRequest.get('tv/popular', {
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
