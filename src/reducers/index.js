import { createReducer } from 'redux-create-reducer';

import initialState from '../initialState';

import * as A from '../constants/actions';
import * as app from './app.reducer';
import * as ui from './ui.reducer';

const reducers = [
    [A.STORED_HISTORY_LOADED, app.onStoredHistoryLoaded],
    [A.INPUT_CHANGED, ui.changeInputValue],
    [A.RESULT_LOADED, ui.loadResult]
];

export default createReducer(
    initialState,
    reducers.reduce((red, [action, reducer]) => ({
        ...red,
        [action]: (state, payload) => reducer(state, payload)
    }), {})
);

