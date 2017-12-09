import { expect } from 'chai';
import * as A from '../../src/constants/actions';
import * as AA from '../../src/actions/app.actions';

describe('App actions', () => {
    describe('appLoaded', () => {
        it('should return APP_LOADED', () => {
            expect(AA.appLoaded()).to.deep.equal({ type: A.APP_LOADED });
        });
    });

    describe('storedHistoryLoaded', () => {
        it('should return STORED_HISTORY_LOADED with history', () => {
            expect(AA.storedHistoryLoaded(['foo', 'bar'])).to.deep.equal({
                type: A.STORED_HISTORY_LOADED, history: ['foo', 'bar']
            });
        });
    });
});

