import { combineReducers } from 'redux';

import counterReducer from './reducers/counterReducer';


export const rootReducer = combineReducers({
    app1Counter: counterReducer
});
export type RootState = ReturnType<typeof rootReducer>;
