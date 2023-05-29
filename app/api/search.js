import axios from "axios"

async function SearchTrack(query) {
    const options = {
        method: 'GET',
        url: 'https://shazam.p.rapidapi.com/search',
        params: {
            term: query,
            locale: 'en-US',
            offset: '0',
            limit: '5'
        },
        headers: {
            'X-RapidAPI-Key': '84b56c5f62msh6372ad3dc16e605p1a0c93jsn4f003216066a',
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        return error;
    }
}
export default SearchTrack;