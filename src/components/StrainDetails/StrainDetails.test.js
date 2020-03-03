import React from 'react';
import { shallow } from 'enzyme';
import {
  StrainDetails,
  mapStateToProps,
  mapDispatchToProps
} from './StrainDetails';
import {
  addToMyStrains,
  addToNotForMe,
  removeFromFavorites,
  removeFromDislikes
} from '../../actions';

describe('strainDetails', () => {
  let wrapper;
  let mockProps;
  beforeEach(() => {
    mockProps = {
      match: { params: { name: 'Durban' } },
      removeFromFavorites: jest.fn(),
      removeFromDislikes: jest.fn(),
      addToNotForMe: jest.fn(),
      addToMyStrains: jest.fn(),
      uniqueStrain: {
        name: 'Durban',
        effects: {
          positive: [],
          negative: [],
          medical: []
        },
        flavors: [],
        race: 'sativa',
        id: 1
      },
      strains: [
        {
          name: 'Durban',
          effects: {
            positive: [],
            negative: [],
            medical: []
          },
          flavors: [],
          race: 'sativa',
          id: 1
        },
        {
          name: 'Jack',
          effects: {
            positive: [],
            negative: [],
            medical: []
          },
          flavors: [],
          race: 'hybrid',
          id: 2
        }
      ],
      user: 'Tristan',
      myStrains: [],
      notForMe: []
    };
    wrapper = shallow(<StrainDetails {...mockProps} />);
  });
  it('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('filterForExactStrain', () => {
    it('should return the exactStrain', () => {
      wrapper.instance().filterForExactStrain(mockProps.strains);

      const expected = {
        name: 'Durban',
        effects: {
          positive: [],
          negative: [],
          medical: []
        },
        flavors: [],
        race: 'sativa',
        id: 1
      };

      expect(
        wrapper.instance().filterForExactStrain(mockProps.strains)
      ).toEqual(expected);
    });
  });

  describe('toggleFavorite', () => {
    let strain;
    beforeEach(() => {
      strain = {
        name: 'Jack',
        effects: {
          positive: [],
          negative: [],
          medical: []
        },
        flavors: [],
        race: 'hybrid',
        id: 2
      };
    });
    it('should call addToMyStrains if the strain is not there already', () => {
      wrapper.instance().toggleFavorite(strain, false);

      expect(mockProps.addToMyStrains).toHaveBeenCalledWith(strain);
    });

    it('should not call addToMyStrains if the strain is already there', () => {
      mockProps.myStrains.push({
        name: 'Jack',
        effects: {
          positive: [],
          negative: [],
          medical: []
        },
        flavors: [],
        race: 'hybrid',
        id: 2
      });

      const expected = [
        {
          name: 'Jack',
          effects: {
            positive: [],
            negative: [],
            medical: []
          },
          flavors: [],
          race: 'hybrid',
          id: 2
        }
      ];
      wrapper.instance().toggleFavorite(strain, true);
      expect(mockProps.myStrains).toEqual(expected);
    });
  });

  describe('addToDislikes', () => {
    let strain;
    beforeEach(() => {
      strain = {
        name: 'Jack',
        effects: {
          positive: [],
          negative: [],
          medical: []
        },
        flavors: [],
        race: 'hybrid',
        id: 2
      };
    });
    it('should call addToNotForMe if the strain is not there already', () => {
      wrapper.instance().toggleDislike(strain, false);

      expect(mockProps.addToNotForMe).toHaveBeenCalledWith(strain);
    });

    it('should not call addToNotForMe if the strain is already there', () => {
      mockProps.notForMe.push({
        name: 'Jack',
        effects: {
          positive: [],
          negative: [],
          medical: []
        },
        flavors: [],
        race: 'hybrid',
        id: 2
      });

      const expected = [
        {
          name: 'Jack',
          effects: {
            positive: [],
            negative: [],
            medical: []
          },
          flavors: [],
          race: 'hybrid',
          id: 2
        }
      ];
      wrapper.instance().toggleDislike(strain);

      expect(mockProps.notForMe).toEqual(expected);
    });
  });

  describe('mapStateToProps', () => {
    it('should return an object with uniqueStrain, strains, user, myStrains and notForMe', () => {
      const mockState = {
        uniqueStrain: {
          name: 'Jack',
          effects: {
            positive: [],
            negative: [],
            medical: []
          },
          flavors: [],
          race: 'hybrid',
          id: 2
        },
        strains: [],
        user: 'Tristan',
        myStrains: [],
        notForMe: [],
        nonsense: '',
        moreNonsense: true
      };
      const expected = {
        uniqueStrain: {
          name: 'Jack',
          effects: {
            positive: [],
            negative: [],
            medical: []
          },
          flavors: [],
          race: 'hybrid',
          id: 2
        },
        strains: [],
        user: 'Tristan',
        myStrains: [],
        notForMe: []
      };
      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    let mockDispatch;
    let strain;
    beforeEach(() => {
      mockDispatch = jest.fn();
      strain = {
        name: 'Jack',
        effects: {
          positive: [],
          negative: [],
          medical: []
        },
        flavors: [],
        race: 'hybrid',
        id: 2
      };
    });

    it('should call dispatch with addToMyStrains when addToFavorites is called', () => {
      const actionToDispatch = addToMyStrains(strain);
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.addToMyStrains(strain);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('should call dispatch with addToNotForMe if addToDislikes if called', () => {
      const actionToDispatch = addToNotForMe(strain);
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.addToNotForMe(strain);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
