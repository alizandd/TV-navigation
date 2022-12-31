import {createStore, combineReducers} from 'redux';
import HomeReducer from './reducers/homeKeyReducer';
import DetailReducer from './reducers/detailKeyReducer';

const rootReducer = combineReducers({
  pos: HomeReducer,
  detailPos: DetailReducer,
});

export const store = createStore(rootReducer);
