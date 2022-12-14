import * as httpRequest from '../../utils/httpRequest';

export const getSeriesMovieLatest = async ({ apiKey, language }) => {
    try {
        const res = await httpRequest.get('tv/latest', {
            params: {
                api_key: apiKey,
                language,
            },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};
