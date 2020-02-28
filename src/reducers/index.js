import { combineReducers } from 'redux';
import strainReducer from './strainReducer';

const rootReducer = combineReducers({
  strains: strainReducer
});

export default rootReducer;
