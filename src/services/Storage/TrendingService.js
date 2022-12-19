import * as httpRequest from '../../utils/httpRequest';

export const getTrending = async ({ apiKey }) => {
    try {
        const res = await httpRequest.get('trending/all/week', {
            params: {
                api_key: apiKey,
            },
        });
        return res.results;
    } catch (error) {
        console.log(error);
    }
};
