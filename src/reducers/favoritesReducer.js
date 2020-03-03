const favoritesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [...state, action.strain];
    case 'REMOVE_FAVORITE':
      return state.filter(strain => strain !== action.strain);

    default:
      return state;
  }
};

export default favoritesReducer;
