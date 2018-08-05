export function fetchPlants(gardenId) {
  return async (dispatch) => {
    dispatch({ type: 'START_ADDING_PLANTS_REQUEST' });

    const plantsResponse = await fetch(`${process.env.REACT_APP_BACKEND_HOST}/plants?garden_index=${gardenId}`)
    const plants = await plantsResponse.json()
    dispatch({ type: 'ADD_PLANTS', plants })
  };
}