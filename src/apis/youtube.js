import axios from 'axios';

const KEY= 'AIzaSyBUoLbxIzg_70oZb42B7kh0fAbBJ9AVLq0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});

