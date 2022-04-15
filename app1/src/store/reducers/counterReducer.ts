import { AnyAction } from 'redux';

import {
    SET_APP1_COUNT
} from '../actionTypes/counterTypes';
import { Counter } from '../types';

const countReducerState: Counter = {
   app1Count:0
};

const countReducer = (
    state: Counter = countReducerState,
    action: AnyAction
): Counter => {
    switch (action.type) {
        case SET_APP1_COUNT:
            return {
                ...state,
                app1Count:action.payload
            };
        default:
            return state;
    }
};

export default countReducer;
