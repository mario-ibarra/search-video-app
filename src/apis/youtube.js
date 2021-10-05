import axios from 'axios';

const KEY = 'AIzaSyDD5sI3VYSt_gAqY1PNLp20bFIhU28lK50';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});