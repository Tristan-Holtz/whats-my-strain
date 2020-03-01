import { combineReducers } from 'redux';
import strainReducer from './strainReducer';
import categoryReducer from './categoryReducer';
import uniqueStrainReducer from './uniqueStrainReducer';
import favoritesReducer from './favoritesReducer';
import userReducer from './userReducer';
import dislikeReducer from './dislikeReducer';
import effectsReducer from './effectsReducer';
import uniqueEffectReducer from './uniqueEffectReducer';

const rootReducer = combineReducers({
  strains: strainReducer,
  category: categoryReducer,
  uniqueStrain: uniqueStrainReducer,
  myStrains: favoritesReducer,
  user: userReducer,
  notForMe: dislikeReducer,
  effects: effectsReducer,
  uniqueEffect: uniqueEffectReducer
});

export default rootReducer;
