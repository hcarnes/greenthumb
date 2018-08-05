export function likePlant(plantToLike) {
  return async (dispatch) => {
    dispatch({ type: 'START_LIKING_PLANT' });
    const plantResponse = await fetch(`${process.env.REACT_APP_BACKEND_HOST}/plants/${plantToLike.id}/like`, {
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