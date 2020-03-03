import { combineReducers } from 'redux';
import strainReducer from './strainReducer';
import categoryReducer from './categoryReducer';
import uniqueStrainReducer from './uniqueStrainReducer';
import favoritesReducer from './favoritesReducer';
import userReducer from './userReducer';
import dislikeReducer from './dislikeReducer';
import effectsReducer from './effectsReducer';
import uniqueEffectReducer from './uniqueEffectReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  strains: strainReducer,
  category: categoryReducer,
  uniqueStrain: uniqueStrainReducer,
  myStrains: favoritesReducer,
  name: userReducer,
  notForMe: dislikeReducer,
  effects: effectsReducer,
  uniqueEffect: uniqueEffectReducer,
  searchStrain: searchReducer
});

export default rootReducer;
