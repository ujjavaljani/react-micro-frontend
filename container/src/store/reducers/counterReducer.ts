import { AnyAction } from 'redux';

import {
    CHANGE_INCREMENT_COUNTER,
} from '../actionTypes/counterTypes';
import { Counter } from '../types';

const countReducerState: Counter = {
    incrementBy:1
};

const countReducer = (
    state: Counter = countReducerState,
    action: AnyAction
): Counter => {
    switch (action.type) {
        case CHANGE_INCREMENT_COUNTER:
            return {
                ...state,
                incrementBy:action.payload
            };
        default:
            return state;
    }
};

export default countReducer;
