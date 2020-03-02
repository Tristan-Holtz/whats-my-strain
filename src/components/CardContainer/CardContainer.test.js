import React from 'react';
import { shallow } from 'enzyme';
import {
  setStrains,
  setCategory,
  setEffects,
  setUniqueEffect
} from '../../actions';
import {
  CardContainer,
  mapStateToProps,
  mapDispatchToProps
} from './CardContainer';

describe('CardContainer', () => {
  let wrapper;
  let mockProps;
  beforeEach(() => {
    mockProps = {
      strains: {
        durban: {
          effects: {
            positive: [],
            negative: [],
            medical: []
          },
          flavors: [],
          race: 'sativa',
          id: 1
        }
      },
      effects: [],
      category: '',
      setCategory: jest.fn(),
      setUniqueEffect: jest.fn()
    };
    wrapper = shallow(<CardContainer {...mockProps} />);
  });

  it('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('selectCategory', () => {
    it('should call call setCategory when fired', () => {
      wrapper.instance().selectCategory('sativa');

      expect(mockProps.setCategory).toHaveBeenCalledWith('sativa');
    });
  });

  describe('handleChange', () => {
    it('should should be able to set uniqueEffect in state', () => {
      const mockEvent = {
        target: {
          value: 'Happy'
        }
      };

      wrapper.instance().sendUniqueEffect(mockEvent);
      expect(mockProps.setUniqueEffect).toHaveBeenCalledWith('Happy');
    });
  });

  describe('mapStateToProps', () => {
    it('should return an object with strains, effects and category', () => {
      const mockState = {
        strains: { durban: {} },
        category: 'sativa',
        effects: [],
        nonsense: '',
        moreNonsense: true
      };
      const expected = {
        strains: { durban: {} },
        category: 'sativa',
        effects: []
      };
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    let mockDispatch;
    let mappedProps;
    beforeEach(() => {
      mockDispatch = jest.fn();
      mappedProps = mapDispatchToProps(mockDispatch);
    });
    it('should call dispatch with setCategory when selectCategory is called', () => {
      const actionToDispatch = setCategory('hybrid');

      mappedProps.setCategory('hybrid');

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('should call dispatch with setUniqueEffect when sendUniqueEffect is called', () => {
      const actionToDispatch = setUniqueEffect('Hungry');

      mappedProps.setUniqueEffect('Hungry');

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
