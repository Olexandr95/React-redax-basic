import {combineReducers} from 'redux';
import { postsReducer } from './postsRuducer';


export const rootReducer = combineReducers({
   postsReducer,
})