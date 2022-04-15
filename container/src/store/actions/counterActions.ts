import { Dispatch } from 'redux';

import { GLOBAL_SET_APP1,GLOBAL_SET_APP2 } from '../actionTypes/counterTypes';

export const increaseCounterApp1 =
    (count: number) => async (dispatch: Dispatch) => {
        try {
            dispatch({
                type: GLOBAL_SET_APP1,
                payload:count
            });
        } catch (error) {
            console.log('error in app1',error);
        }
    };
    export const increaseCounterApp2 =
    (count: number) => async (dispatch: Dispatch) => {
        try {
            dispatch({
                type: GLOBAL_SET_APP2,
                payload:count
            });
        } catch (error) {
            console.log('error in ap2',error);
        }
    };