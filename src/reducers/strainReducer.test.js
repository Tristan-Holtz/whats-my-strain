import strainsReducer from './strainReducer';

describe('strainsReducer', () => {
  it('should return the initial value of state if no state is given', () => {
    const expected = {};
    const result = strainsReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the initial value of state if type is incorrect', () => {
    const expected = {};
    const effect = 'Hungry';
    const mockAction = {
      type: 'SET_EFFECT',
      effect
    };
    const result = strainsReducer(undefined, mockAction);

    expect(result).toEqual(expected);
  });

  it('should return the correct state if the action type is SET_CATEGORY', () => {
    const expected = [{ name: 'Durban' }, { name: 'Jack' }];
    const strains = [{ name: 'Durban' }, { name: 'Jack' }];
    const mockAction = {
      type: 'SET_STRAINS',
      strains
    };
    const result = strainsReducer(undefined, mockAction);
    expect(result).toEqual(expected);
  });
});
