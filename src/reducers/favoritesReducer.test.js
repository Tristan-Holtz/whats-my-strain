import favoritesReducer from './favoritesReducer';

describe('favoritesReducer', () => {
  it('should return the initial value of state if no state is given', () => {
    const expected = [];
    const result = favoritesReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the initial value of state if type is incorrect', () => {
    const expected = [];
    const strain = { name: 'Durban' };
    const mockAction = {
      type: 'SET_CATEGORY',
      strain
    };
    const result = favoritesReducer(undefined, mockAction);
    expect(result).toEqual(expected);
  });

  it('should return the correct state if the action type is ADD_FAVORITE', () => {
    const expected = [{ name: 'Durban' }];
    const strain = { name: 'Durban' };
    const mockAction = {
      type: 'ADD_FAVORITE',
      strain
    };
    const result = favoritesReducer(undefined, mockAction);
    expect(result).toEqual(expected);
  });
});
