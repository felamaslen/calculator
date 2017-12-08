import { applyMiddleware, createStore } from 'redux';

import rootReducer from '../reducers';

export default initialState => {
    const createStoreWithMiddleware = applyMiddleware()(createStore);

    const store = createStoreWithMiddleware(rootReducer, initialState);

    return store;
}

