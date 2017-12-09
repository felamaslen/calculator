import { expect } from 'chai';
import * as app from '../../src/reducers/app.reducer';

describe('App reducer', () => {
    describe('onStoredHistoryLoaded', () => {
        it('should insert the stored history into the state', () => {
            expect(app.onStoredHistoryLoaded({
            }, { history: ['foo', 'bar'] }))
                .to.deep.equal({
                    history: ['foo', 'bar']
                });
        });
    });
});

