const uniqueEffectReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_EFFECT':
      return action.effect;
    default:
      return state;
  }
};

export default uniqueEffectReducer;
