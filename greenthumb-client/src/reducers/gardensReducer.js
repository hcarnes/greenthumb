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

    default:
      console.log(action)
      return state;
  }
}