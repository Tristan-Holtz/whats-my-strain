import userReducer from './userReducer';

describe('dislikeReducer', () => {
  it('should return the initial value of state if no state is given', () => {
    const expected = '';
    const result = userReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the initial value of state if type is incorrect', () => {
    const expected = '';
    const user = 'Tristan';
    const mockAction = {
      type: 'SET_CATEGORY',
      user
    };
    const result = userReducer(undefined, mockAction);
    expect(result).toEqual(expected);
  });

  it('should return the correct state if the action type is SET_USER', () => {
    const expected = 'Tristan';
    const name = 'Tristan';
    const mockAction = {
      type: 'SET_USER',
      name
    };
    const result = userReducer(undefined, mockAction);
    expect(result).toEqual(expected);
  });
});
