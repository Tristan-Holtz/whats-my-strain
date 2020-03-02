import categoryReducer from './categoryReducer';

describe('categoryReducer', () => {
  it('should return the initial value of state if no state is given', () => {
    const expected = '';
    const result = categoryReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the initial value of state if type is incorrect', () => {
    const expected = '';
    const category = 'sativa';
    const mockAction = {
      type: 'SET_STRAINS',
      category
    };
    const result = categoryReducer(undefined, mockAction);
    expect(result).toEqual(expected);
  });

  it('should return the correct state if the action type is SET_CATEGORY', () => {
    const expected = 'sativa';
    const category = 'sativa';
    const mockAction = {
      type: 'SET_CATEGORY',
      category
    };
    const result = categoryReducer(undefined, mockAction);
    expect(result).toEqual(expected);
  });
});
