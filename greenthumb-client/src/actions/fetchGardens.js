export function fetchGardens() {
  return async (dispatch) => {
    dispatch({ type: 'START_ADDING_GARDENS_REQUEST' });

    const gardensResponse = await fetch('https://data.cityofnewyork.us/resource/yes4-7zbb.json')
    const gardensWithoutId = await gardensResponse.json()
    const gardens = gardensWithoutId.map((garden, index) => { return { ...garden, id: index } })
    dispatch({ type: 'ADD_GARDENS', gardens })
  };
}