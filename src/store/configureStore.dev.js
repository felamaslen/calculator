/* eslint-disable no-underscore-dangle, global-require */
import { applyMiddleware, createStore, compose } from 'redux';

import { createLogger } from 'redux-logger';

import rootReducer from '../reducers';

import * as A from '../constants/actions';

const SKIP_LOG_ACTIONS = [
    A.INPUT_CHANGED
];

const logger = createLogger({
    collapsed: true,
    predicate: (getState, action) => SKIP_LOG_ACTIONS.indexOf(action.type) === -1
});

const newStore = initialState => {
    const createStoreWithMiddleware = compose(
        applyMiddleware(logger)
    )(createStore);

    const store = createStoreWithMiddleware(
        rootReducer,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({
            actionsBlacklist: SKIP_LOG_ACTIONS
        })
    );

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            store.replaceReducer(require('../reducers').default);
        });
    }

    return store;
};

export default newStore;
