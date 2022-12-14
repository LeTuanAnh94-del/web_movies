import * as httpRequest from '../../utils/httpRequest';

export const getBanner = async ({ apiKey, language, page }) => {
    try {
        const res = await httpRequest.get('tv/popular', {
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
