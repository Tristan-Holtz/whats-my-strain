import uniqueStrainReducer from './uniqueStrainReducer';

describe('dislikeReducer', () => {
  it('should return the initial value of state if no state is given', () => {
    const expected = {};
    const result = uniqueStrainReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the initial value of state if type is incorrect', () => {
    const expected = {};
    const strain = { name: 'Durban' };
    const mockAction = {
      type: 'SET_CATEGORY',
      strain
    };
    const result = uniqueStrainReducer(undefined, mockAction);
    expect(result).toEqual(expected);
  });

  it('should return the correct state if the action type is SET_UNIQUE', () => {
    const expected = { name: 'Durban' };
    const strain = { name: 'Durban' };
    const mockAction = {
      type: 'SET_UNIQUE',
      strain
    };
    const result = uniqueStrainReducer(undefined, mockAction);
    expect(result).toEqual(expected);
  });
});
