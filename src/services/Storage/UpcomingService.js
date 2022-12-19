import * as httpRequest from '../../utils/httpRequest';

export const getUpcoming = async ({ apiKey }) => {
    try {
        const res = await httpRequest.get('trending/all/week', {
            params: {
                api_key: apiKey,
            },
        });
        return res.results.slice(0, 5);
    } catch (error) {
        console.log(error);
    }
};
