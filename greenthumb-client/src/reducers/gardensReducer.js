export default function gardensReducer(state = {
  gardens: [], query: ""
}, action) {
  switch (action.type) {

    case 'ADD_GARDENS':
      return { ...state, gardens: action.gardens };

    case 'SEARCH_GARDENS':
      return { ...state, query: action.query }

    default:
      console.log(action)
      return state;
  }
}