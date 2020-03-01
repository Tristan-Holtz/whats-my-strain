const dislikeReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_DISLIKE':
      return [...state, action.strain];
    default:
      return state;
  }
};

export default dislikeReducer;
