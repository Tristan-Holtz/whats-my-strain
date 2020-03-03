const searchReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH':
      return action.strain;
    default:
      return state;
  }
};

export default searchReducer;
