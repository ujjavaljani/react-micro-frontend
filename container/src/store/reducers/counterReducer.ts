import { AnyAction } from 'redux';

import {
    GLOBAL_SET_APP1,
    GLOBAL_SET_APP2,
} from '../actionTypes/counterTypes';
import { Counter } from '../types';

const countReducerState: Counter = {
    count:{
        app1:0,
        app2:0
    }
};

const countReducer = (
    state: Counter = countReducerState,
    action: AnyAction
): Counter => {
    switch (action.type) {
        case GLOBAL_SET_APP1:
            return {
                ...state,
                count:{
                    ...state.count,
                    app1:action.payload
                }
            };
            case GLOBAL_SET_APP2:
                return {
                    ...state,
                    count:{
                        ...state.count,
                        app2:action.payload
                    }
                };
        default:
            return state;
    }
};

export default countReducer;
