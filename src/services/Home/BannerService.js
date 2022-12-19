import * as httpRequest from '../../utils/httpRequest';

export const getBanner = async ({ apiKey, page, language }) => {
    try {
        const res = await httpRequest.get('movie/popular', {
            params: {
                api_key: apiKey,
                page,
                language,
            },
        });
        return res.results.slice(0, 3);
    } catch (error) {
        console.log(error);
    }
};
