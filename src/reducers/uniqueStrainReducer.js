const uniqueStrainReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_UNIQUE':
      return action.strain;
    default:
      return state;
  }
};

export default uniqueStrainReducer;
