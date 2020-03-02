import React from 'react';
import { shallow } from 'enzyme';
import { Strain, mapDispatchToProps, mapStateToProps } from './Strain';
import { setUniqueStrain } from '../../actions';

describe('Strain', () => {
  it('should render the component', () => {
    const mockProps = {
      setUniqueStrain: jest.fn(),
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
      category: 'sativa',
      myStrains: [],
      notForMe: [],
      uniqueEffect: '',
      uniqueStrain: {}
    };
    const wrapper = shallow(<Strain {...mockProps} />);

    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('should return an object with strains, category, uniqueStrain, myStrains, notForMe and uniqueEffect', () => {
      const mockState = {
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
        category: 'sativa',
        myStrains: [],
        notForMe: [],
        uniqueEffect: '',
        uniqueStrain: {},
        nonsense: '',
        moreNonsense: true
      };

      const expected = {
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
        category: 'sativa',
        myStrains: [],
        notForMe: [],
        uniqueEffect: '',
        uniqueStrain: {}
      };
      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch with setUniqueStrain when getUniqueStrain is called', () => {
      const mockDispatch = jest.fn();
      const uniqueStrain = {
        name: 'Durban',
        id: 1,
        flavors: []
      };
      const actionToDispatch = setUniqueStrain(uniqueStrain);
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.setUniqueStrain(uniqueStrain);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
