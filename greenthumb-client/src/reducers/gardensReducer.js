export default function gardensReducer(state = {
  gardens: [], plants: [], query: ""
}, action) {
  switch (action.type) {

    case 'ADD_GARDENS':
      return { ...state, gardens: action.gardens };

    case 'SEARCH_GARDENS':
      return { ...state, query: action.query }

    case 'ADD_PLANT':
      return { ...state, plants: [...state.plants, action.plant] }

    case 'ADD_PLANTS':
      const plantsWithDupes = [...state.plants, ...action.plants]
      const uniquePlants = plantsWithDupes.filter((plant, pos, arr) => {
        return arr.map(mapPlant => mapPlant["id"]).indexOf(plant["id"]) === pos;
      });
      return { ...state, plants: uniquePlants }

    default:
      console.debug(action)
      return state;
  }
}