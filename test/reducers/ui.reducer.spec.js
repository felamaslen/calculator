/* eslint-disable id-length, new-cap */
import { expect } from 'chai';
import * as R from '../../src/reducers/ui.reducer';

describe('UI reducers', () => {
    describe('changeInputValue', () => {
        it('should change input in state', () => {
            expect(R.changeInputValue(
                { input: '' },
                { type: 'INPUT_CHANGED', value: 'baz' }
            ))
                .to.deep.equal({ input: 'baz' });
        });
    });

    describe('RESULT_LOADED', () => {
        it('should insert the result into the state', () => {
            expect(R.loadResult(
                { history: [], result: null, input: '5 * 2' },
                { type: 'RESULT_LOADED', result: 10 }
            ))
                .to.deep.equal({
                    history: [
                        { input: '5 * 2', result: 10 }
                    ],
                    result: 10,
                    input: '',
                    error: false
                });
        });

        it('should set error to true if an error occurred', () => {
            expect(R.loadResult(
                { result: 10, error: false },
                { type: 'RESULT_LOADED', err: 'something bad happened' }
            ))
                .to.deep.equal({ result: null, error: true });
        });
    });
});

