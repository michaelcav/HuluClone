const API_KEY = "04c35731a5ee918f014970082a0088b1";

const requests = {
    fetchTrending: `/trending/all/week?api_key=04c35731a5ee918f014970082a0088b1&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=04c35731a5ee918f014970082a0088b1&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=04c35731a5ee918f014970082a0088b1&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=04c35731a5ee918f014970082a0088b1&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=04c35731a5ee918f014970082a0088b1&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=04c35731a5ee918f014970082a0088b1&with_genres=10749`,
    fetchMystery: `/discover/movie?api_key=04c35731a5ee918f014970082a0088b1&with_genres=9648`,
    fetchSciFi: `/discover/movie?api_key=04c35731a5ee918f014970082a0088b1&with_genres=878`,
    fetchWestern: `/discover/movie?api_key=04c35731a5ee918f014970082a0088b1&with_genres=37`,
    fetchAnimation: `/discover/movie?api_key=04c35731a5ee918f014970082a0088b1&with_genres=16`,
    fetchTV: `/discover/movie?api_key=04c35731a5ee918f014970082a0088b1&with_genres=10770`,
};

export default requests;