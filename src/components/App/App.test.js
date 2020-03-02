import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  it('should render the component', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toMatchSnapshot();
  });
});
