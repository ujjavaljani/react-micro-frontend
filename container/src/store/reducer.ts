import { combineReducers } from 'redux';

import counterReducer from './reducers/counterReducer';
import CountAppOneReducer from 'app1/CountAppOneReducer';


export const rootReducer = combineReducers({
    counter: counterReducer,
    app1Counter: CountAppOneReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
