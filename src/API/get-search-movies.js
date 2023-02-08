async function getSearchMovies(query, page = 1) {
    const key = 'b18f7d88a33ace0e3e4fb83c74434dce';
    const url = `https://api.themoviedb.org/3/search/movie`;
    const filter = `?api_key=${key}&query=${query}&language=en-US&page=${page}&include_adult=false`;
  
    const response = await fetch(`${url}${filter}`);
    const data = await response.json();
  
    return data;
  }
  
  export default getSearchMovies;