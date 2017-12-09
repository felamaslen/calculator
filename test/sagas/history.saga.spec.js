/* eslint-disable prefer-reflect */
import '../browser';
import { expect } from 'chai';
import { testSaga } from 'redux-saga-test-plan';
import historySaga, * as S from '../../src/sagas/history.saga';
import * as A from '../../src/constants/actions';
import * as AA from '../../src/actions/app.actions';

describe('History saga', () => {
    describe('loadStoredHistory', () => {
        it('should fetch stored history from localStorage, and dispatch to the store', () => {
            testSaga(S.loadStoredHistory)
                .next()
                .take(A.APP_LOADED)
                .next()
                .call([localStorage, 'getItem'], 'history')
                .next(JSON.stringify([{ input: 'foo', result: 10 }]))
                .put(AA.storedHistoryLoaded([{ input: 'foo', result: 10 }]))
                .next()
                .isDone();
        });

        it('should not do anything if there is no history stored', () => {
            testSaga(S.loadStoredHistory)
                .next()
                .take(A.APP_LOADED)
                .next()
                .call([localStorage, 'getItem'], 'history')
                .next(null)
                .isDone();
        });

        it('should not do anything if an error occurred', () => {
            testSaga(S.loadStoredHistory)
                .next()
                .take(A.APP_LOADED)
                .next()
                .call([localStorage, 'getItem'], 'history')
                .throw(new Error('some error occurred'))
                .isDone();
        });
    });

    describe('selectHistory', () => {
        it('should get the history from the state', () => {
            expect(S.selectHistory({ history: ['foo', 'bar'] })).to.deep.equal(['foo', 'bar']);
        });
    });

    describe('updateStoredHistory', () => {
        it('should update localStorage with the current history (encoded)', () => {
            testSaga(S.updateStoredHistory)
                .next()
                .take(A.RESULT_LOADED)
                .next()
                .select(S.selectHistory)
                .next([{ input: '5 + 3', result: 8 }])
                .call([localStorage, 'setItem'], 'history', '[{"input":"5 + 3","result":8}]')
                .next();
        });
    });

    describe('historySaga', () => {
        it('should fork the history sagas', () => {
            testSaga(historySaga)
                .next()
                .fork(S.loadStoredHistory)
                .next()
                .fork(S.updateStoredHistory)
                .next()
                .isDone();
        });
    });
});

