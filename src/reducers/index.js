import { combineReducers } from 'redux';
import albumListReducer from './albumListReducer';

export default combineReducers({
  albumList: albumListReducer
})