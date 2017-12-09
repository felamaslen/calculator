import { expect } from 'chai';
import * as app from '../../src/reducers/app.reducer';

describe('App reducer', () => {
    describe('onStoredHistoryLoaded', () => {
        it('should insert the stored history into the state', () => {
            expect(app.onStoredHistoryLoaded({
            }, {
                history: ['2+4', '3^4']
            }))
                .to.deep.equal({
                    history: [
                        { input: '2 + 4', result: 6 },
                        { input: '3 ^ 4', result: 81 }
                    ]
                });
        });
    });
});

