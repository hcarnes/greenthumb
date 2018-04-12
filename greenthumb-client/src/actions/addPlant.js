// export const addPlant = (plant) => {
//   return {
//     type: 'ADD_PLANT',
//     plant
//   };
// };

export function addPlant(plant) {
  return async (dispatch) => {
    dispatch({ type: 'START_ADDING_PLANT' });

    const plantsResponse = await fetch('http://localhost:3001/plants')
    const gardens = await gardensResponse.json()
    dispatch({ type: 'ADD_GARDENS', gardens })
  };
}