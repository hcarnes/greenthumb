export default function gardensReducer(state = {
  gardens: [{ name: "foobar" }]
}, action) {
  switch (action.type) {

    case 'ADD_GARDENS':
      return { ...state, gardens: action.gardens };

    default:
      console.log(action)
      return state;
  }
}