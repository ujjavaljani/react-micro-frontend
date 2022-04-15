import { createStore, applyMiddleware, Store,compose } from 'redux';
import thunk from 'redux-thunk';

import { rootReducer } from './reducer';

let store: Store;
export default function configureStore(initialState: any) {
    initialState = initialState || {};
    if (process.env.NODE_ENV === 'development') {
        const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
        store = createStore(
            rootReducer,
            initialState,
            composeEnhancers(applyMiddleware(thunk))
        );
        return store;
    }
    store = createStore(rootReducer, initialState, applyMiddleware(thunk));
    return store;
}
export function getStore() {
    return store;
}
