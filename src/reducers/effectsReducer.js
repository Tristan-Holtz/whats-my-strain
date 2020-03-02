const effectsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_EFFECTS':
      return action.effects.reduce((acc, effect) => {
        if (!acc[effect.type]) {
          acc[effect.type] = [];
        }
        acc[effect.type].push(effect.effect);
        return acc;
      }, {});
    default:
      return state;
  }
};

export default effectsReducer;
