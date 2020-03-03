const dislikeReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_DISLIKE':
      return [...state, action.strain];
    case 'REMOVE_DISLIKE':
      return state.filter(strain => strain !== action.strain);
    default:
      return state;
  }
};

export default dislikeReducer;
