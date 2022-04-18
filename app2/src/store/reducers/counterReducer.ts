import { AnyAction } from 'redux';

import {
    INCREMENT_APP2
} from '../actionTypes/counterTypes';
import { Counter } from '../types';

const countReducerState: Counter = {
   app2Count:1
};

const countReducer = (
    state: Counter = countReducerState,
    action: AnyAction
): Counter => {
    switch (action.type) {
        case INCREMENT_APP2:
            return {
                ...state,
                app2Count:action.payload
            };
        default:
            return state;
    }
};

export default countReducer;
