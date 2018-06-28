import {createStore,combineReducers} from 'redux';

import categoryReducer from './reducers/categories';
import cardReducer from './reducers/cards';

let reducers = combineReducers({
  categories: categoryReducer,
  cards: cardReducer,
});

export default () => createStore(reducers);