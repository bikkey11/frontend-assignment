import axios from 'axios';

async function getTrackList() {


    let headersList = {
        'X-RapidAPI-Key': '84b56c5f62msh6372ad3dc16e605p1a0c93jsn4f003216066a',
        'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    }

    let reqOptions = {
        url: "https://shazam.p.rapidapi.com/charts/track",
        method: "GET",
        params: {
            locale: 'en-US',
            pageSize: '20',
            startFrom: '0'
        },
        headers: headersList,
    }

    try {
        let response = await axios.request(reqOptions);
        return response.data;
    } catch (error) {
        return error;

    }

}
export default getTrackList;