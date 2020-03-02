import effectsReducer from './effectsReducer';

describe('dislikeReducer', () => {
  it('should return the initial value of state if no state is given', () => {
    const expected = {};
    const result = effectsReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the initial value of state if type is incorrect', () => {
    const expected = {};
    const effects = [
      { type: 'positive', effect: 'Hungry' },
      { type: 'negative', effect: 'Dry Mouth' }
    ];
    const mockAction = {
      type: 'SET_CATEGORY',
      effects
    };
    const result = effectsReducer(undefined, mockAction);
    expect(result).toEqual(expected);
  });

  it('should return the correct state if the action type is SET_EFFECTS', () => {
    const expected = { negative: ['Dry Mouth'], positive: ['Hungry'] };
    const effects = [
      { type: 'positive', effect: 'Hungry' },
      { type: 'negative', effect: 'Dry Mouth' }
    ];
    const mockAction = {
      type: 'SET_EFFECTS',
      effects
    };
    const result = effectsReducer(undefined, mockAction);
    expect(result).toEqual(expected);
  });
});
