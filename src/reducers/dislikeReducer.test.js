import dislikeReducer from './dislikeReducer';

describe('dislikeReducer', () => {
  it('should return the initial value of state if no state is given', () => {
    const expected = [];
    const result = dislikeReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the initial value of state if type is incorrect', () => {
    const expected = [];
    const strain = { name: 'Durban' };
    const mockAction = {
      type: 'SET_CATEGORY',
      strain
    };
    const result = dislikeReducer(undefined, mockAction);
    expect(result).toEqual(expected);
  });

  it('should return the correct state if the action type is SET_DISLIKE', () => {
    const expected = [{ name: 'Durban' }];
    const strain = { name: 'Durban' };
    const mockAction = {
      type: 'SET_DISLIKE',
      strain
    };
    const result = dislikeReducer(undefined, mockAction);
    expect(result).toEqual(expected);
  });
});
