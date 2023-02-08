async function getMovieCredits(movieId) {
    const key = 'b18f7d88a33ace0e3e4fb83c74434dce';
    const url = `https://api.themoviedb.org/3/movie/${movieId}/credits`;
    const filter = `?api_key=${key}&language=en-US`;
  
    const response = await fetch(`${url}${filter}`);
    const data = await response.json();
  
    return data;
  }
  
  export default getMovieCredits;