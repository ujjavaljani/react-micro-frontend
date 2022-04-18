import { combineReducers } from 'redux';

import counterReducer from './reducers/counterReducer';


export const rootReducer = combineReducers({
    app2Counter: counterReducer
});
export type RootState = ReturnType<typeof rootReducer>;
