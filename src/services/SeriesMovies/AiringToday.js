import * as httpRequest from '../../utils/httpRequest';

export const getSeriesMovieAiringToday = async ({ apiKey, language, page }) => {
    try {
        const res = await httpRequest.get('tv/on_the_air', {
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
