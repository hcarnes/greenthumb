export function fetchGardens() {
  return async (dispatch) => {
    dispatch({ type: 'START_ADDING_GARDENS_REQUEST' });

    const gardensResponse = await fetch('https://data.cityofnewyork.us/resource/yes4-7zbb.json')
    const gardens = await gardensResponse.json()
    dispatch({ type: 'ADD_GARDENS', gardens })
  };
}