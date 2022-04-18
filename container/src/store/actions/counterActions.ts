import { Dispatch } from 'redux';

import { CHANGE_INCREMENT_COUNTER } from '../actionTypes/counterTypes';

export const changeFilter =
    (count: string) => (dispatch: Dispatch) => {
        try {
            dispatch({
                type: CHANGE_INCREMENT_COUNTER,
                payload:Number(count)
            });
        } catch (error) {
            console.log('error in app1',error);
        }
    };
