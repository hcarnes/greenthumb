export function likePlant(plantToLike) {
  return async (dispatch) => {
    dispatch({ type: 'START_LIKING_PLANT' });
    const plantResponse = await fetch(`http://localhost:3001/plants/${plantToLike.id}/like`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "post"
    })
    const plant = await plantResponse.json()
    dispatch({ type: 'UPDATE_PLANT', plant })
  };
}