import axios from 'axios';

/* BASE URL TO MAKE REQUESTS TO THE MOVIE DATABASE  */

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

export default instance;