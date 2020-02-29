const uniqueStrainReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_UNIQUE':
      return action.name;
    default:
      return state;
  }
};

export default uniqueStrainReducer;
