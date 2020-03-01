const userReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.name;
    default:
      return state;
  }
};

export default userReducer;
