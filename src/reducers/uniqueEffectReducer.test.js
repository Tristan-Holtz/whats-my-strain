import uniqueEffectReducer from './uniqueEffectReducer';

describe('uniqueEffectReducer', () => {
  it('should return the initial value of state if no state is given', () => {
    const expected = '';
    const result = uniqueEffectReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the initial value of state if type is incorrect', () => {
    const expected = '';
    const effect = 'Sleepy';
    const mockAction = {
      type: 'SET_CATEGORY',
      effect
    };
    const result = uniqueEffectReducer(undefined, mockAction);
    expect(result).toEqual(expected);
  });

  it('should return the correct state if the action type is SET_EFFECT', () => {
    const expected = 'Sleepy';
    const effect = 'Sleepy';
    const mockAction = {
      type: 'SET_EFFECT',
      effect
    };
    const result = uniqueEffectReducer(undefined, mockAction);
    expect(result).toEqual(expected);
  });
});
