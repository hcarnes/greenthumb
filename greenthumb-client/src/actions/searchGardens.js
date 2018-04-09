export function searchGardens(query) {
  return (dispatch) => {
    dispatch({ type: 'SEARCH_GARDENS', query });
  };
}