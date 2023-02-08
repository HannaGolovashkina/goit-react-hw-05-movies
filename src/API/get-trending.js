async function getTrending() {
    const key = 'b18f7d88a33ace0e3e4fb83c74434dce';
    const url = 'https://api.themoviedb.org/3/trending/all/day';
    const filter = `?api_key=${key}`;
  
    const response = await fetch(`${url}${filter}`);
    const data = await response.json();
  
    return data;
  }
  
  export default getTrending;