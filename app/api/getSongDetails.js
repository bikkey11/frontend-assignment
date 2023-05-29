import axios from 'axios';

async function getSongDetails(songKey) {
    // console.log(songKey)

    const options = {
        method: 'GET',
        url: 'https://shazam.p.rapidapi.com/songs/get-details',
        params: {
            key: songKey,
            locale: 'en-US'
        },
        headers: {
            'X-RapidAPI-Key': '84b56c5f62msh6372ad3dc16e605p1a0c93jsn4f003216066a',
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        return (response.data);
    } catch (error) {
        return (error);
    }
}

export default getSongDetails;