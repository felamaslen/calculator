import { expect } from 'chai';
import * as A from '../../src/constants/actions';
import * as UA from '../../src/actions/ui.actions';

describe('UI actions', () => {
    describe('inputChanged', () => {
        it('should return INPUT_CHANGED with value', () => {
            expect(UA.inputChanged('foo')).to.deep.equal({ type: A.INPUT_CHANGED, value: 'foo' });
        });
    });

    describe('loadInitiated', () => {
        it('should return LOAD_INITIATED', () => {
            expect(UA.loadInitiated()).to.deep.equal({ type: A.LOAD_INITIATED });
        });
    });

    describe('resultLoaded', () => {
        it('should return RESULT_LOADED with response', () => {
            expect(UA.resultLoaded({ foo: 'bar', bar: 'baz' })).to.deep.equal({
                type: A.RESULT_LOADED,
                foo: 'bar',
                bar: 'baz'
            });
        });
    });
});

