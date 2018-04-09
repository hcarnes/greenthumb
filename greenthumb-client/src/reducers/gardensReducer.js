export default function gardensReducer(state = {
  gardens: [{ name: "foobar" }]
}, action) {
  switch (action.type) {

    // case 'ADD_COUNT':
    //   return state.items.concat(state.items.length + 1);

    default:
      return state;
  }
}