import { combineReducers } from 'redux';
import strainReducer from './strainReducer';
import categoryReducer from './categoryReducer';
import uniqueStrainReducer from './uniqueStrainReducer';

const rootReducer = combineReducers({
  strains: strainReducer,
  category: categoryReducer,
  uniqueStrain: uniqueStrainReducer
});

export default rootReducer;
