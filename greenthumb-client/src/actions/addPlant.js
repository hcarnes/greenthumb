export function addPlant(plantToAdd) {
  return async (dispatch) => {
    dispatch({ type: 'START_ADDING_PLANT' });
    const plantJSON = JSON.stringify({ plant: plantToAdd })
    const plantResponse = await fetch(`${process.env.REACT_APP_BACKEND_HOST}/plants`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: plantJSON,
      method: "post"
    })
    const plant = await plantResponse.json()
    dispatch({ type: 'ADD_PLANT', plant })
  };
}