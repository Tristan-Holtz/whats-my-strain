import React from 'react';
import { shallow } from 'enzyme';
import { Login, mapDispatchToProps } from './Login';
import { setUser } from '../../actions';

describe('Login', () => {
  let wrapper;
  let mockProps;
  beforeEach(() => {
    mockProps = { setUser: jest.fn() };
    wrapper = shallow(<Login {...mockProps} />);
  });
  it('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('handleChange', () => {
    it('should should be able to set name in state', () => {
      const mockEvent = {
        target: {
          name: 'login-name',
          value: 'Tristan'
        }
      };

      wrapper.instance().handleChange(mockEvent);
      expect(wrapper.state('name')).toEqual('Tristan');
    });
  });

  describe('loginUser', () => {
    it('should call setUser when fired', () => {
      wrapper.instance().loginUser();

      expect(mockProps.setUser).toHaveBeenCalled();
    });
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch with setUser when loginUser is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = setUser('Tristan');
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.setUser('Tristan');

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
