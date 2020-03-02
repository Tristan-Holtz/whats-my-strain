import React from 'react';
import { shallow } from 'enzyme';
import { Header, mapStateToProps, mapDispatchToProps } from './Header';
import { setCategory } from '../../actions';

describe('Header', () => {
  let wrapper;
  let mockProps;
  beforeEach(() => {
    mockProps = {
      name: 'Tristan',
      setCategory: jest.fn()
    };

    wrapper = shallow(<Header {...mockProps} />);
  });
  it('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('should return an object with name', () => {
      const mockState = {
        name: 'Tristan',
        nonsense: [],
        moreNonsense: true
      };
      const expected = { name: 'Tristan' };
      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch with setCategory when My Strains is clicked', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = setCategory('favorites');
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.setCategory('favorites');

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
