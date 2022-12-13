import * as httpRequest from '../utils/httpRequest';

export const getGenre = async ({ apiKey, language }) => {
    try {
        const res = await httpRequest.get('genre/movie/list', {
            params: {
                api_key: apiKey,
                language,
            },
        });
        return res.genres;
    } catch (error) {
        console.log(error);
    }
};
