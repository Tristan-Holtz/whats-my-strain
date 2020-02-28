const strainsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_STRAINS':
      return action.strains;
    default:
      return state;
  }
};

export default strainsReducer;
