/* eslint-disable id-length, new-cap */
import { expect } from 'chai';
import * as R from '../../src/reducers/ui.reducer';

describe('UI reducers', () => {
    describe('changeInputValue', () => {
        it('should reset the state if an empty value is passed', () => {
            expect(R.changeInputValue({ input: 'foo', error: true, result: 'bar' }, { value: '' }))
                .to.deep.equal({
                    input: '',
                    error: false,
                    result: null
                });
        });

        it('should set the input value and evaluate the result', () => {
            expect(R.changeInputValue({ input: '', error: true, result: null }, { value: '2 + 3' }))
                .to.deep.equal({
                    input: '2 + 3',
                    error: false,
                    result: 5
                });
        });

        it('should handle invalid inputs', () => {
            expect(R.changeInputValue({
                input: '', error: false, result: 'foo'
            }, { value: 'not a valid input' }))
                .to.deep.equal({
                    input: 'not a valid input',
                    error: true,
                    result: 'foo'
                });
        });
    });

    describe('loadResult', () => {
        it('should push the current result to the history and clear the input, if there was not an error', () => {
            expect(R.loadResult({
                history: [], result: 5, error: false, input: '2 + 3'
            }))
                .to.deep.equal({
                    history: [{ input: '2 + 3', result: 5 }],
                    error: false,
                    result: null,
                    input: ''
                });
        });

        it('should do nothing if there was an error', () => {
            expect(R.loadResult({
                error: true,
                result: 5
            }))
                .to.deep.equal({ error: true, result: 5 });

            expect(R.loadResult({
                error: false,
                result: null
            }))
                .to.deep.equal({ error: false, result: null });
        });
    });
});

