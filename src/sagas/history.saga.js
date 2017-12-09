import { fork, select, take, call, put } from 'redux-saga/effects';
import * as A from '../constants/actions';
import * as AA from '../actions/app.actions';

const validateHistory = history => Array.isArray(history) && history.reduce(
    (valid, item) => valid && typeof item === 'string',
    true
);

export function *loadStoredHistory() {
    yield take(A.APP_LOADED);

    try {
        const historyRaw = yield call([localStorage, 'getItem'], 'history');

        const history = JSON.parse(historyRaw);

        if (!validateHistory(history)) {
            return;
        }

        yield put(AA.storedHistoryLoaded(history));
    }
    catch (err) {
        // do nothing
    }
}

export const selectHistory = ({ history }) => history
    .map(({ input }) => input.replace(/\s+/g, ''))

export function *updateStoredHistory() {
    while (true) {
        yield take(A.RESULT_LOADED);

        const history = yield select(selectHistory);

        const historyEncoded = JSON.stringify(history);

        try {
            yield call([localStorage, 'setItem'], 'history', historyEncoded);
        }
        catch (err) {
            // do nothing
        }
    }
}

export default function *historySaga() {
    yield fork(loadStoredHistory);

    yield fork(updateStoredHistory);
}

