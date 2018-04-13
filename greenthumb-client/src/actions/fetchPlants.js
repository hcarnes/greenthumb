export function fetchPlants(gardenId) {
  return async (dispatch) => {
    dispatch({ type: 'START_ADDING_PLANTS_REQUEST' });

    const plantsResponse = await fetch(`http://localhost:3001/plants?garden_index=${gardenId}`)
    const plants = await plantsResponse.json()
    dispatch({ type: 'ADD_PLANTS', plants })
  };
}