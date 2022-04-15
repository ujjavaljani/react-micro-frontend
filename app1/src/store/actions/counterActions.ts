import { Dispatch } from 'redux';

import { SET_APP1_COUNT } from '../actionTypes/counterTypes';

export const increaseCounterApp1 =
    (count: number) => async (dispatch: Dispatch) => {
        try {
            dispatch({
                type: SET_APP1_COUNT,
                payload:count
            });
        } catch (error) {
            console.log('error in app1',error);
        }
};