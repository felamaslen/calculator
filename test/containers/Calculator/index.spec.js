/* eslint-disable newline-per-chained-call */
import { expect } from 'chai';
import '../../browser';
import React from 'react';
import shallow from '../../shallow-with-store';
import { createMockStore } from 'redux-test-utils';
import Calculator from '../../../src/containers/Calculator';
import ResultsList from '../../../src/components/ResultsList';
import InputGroup from '../../../src/components/InputGroup';

describe('<Calculator />', () => {
    const state = {
        history: ['foo'],
        input: '',
        error: false
    };

    it('should render its basic structure', () => {
        const wrapper = shallow(<Calculator />, createMockStore(state)).dive();

        expect(wrapper.is('div.calculator-outer')).to.equal(true);

        expect(wrapper.children()).to.have.length(2);
    });

    it('should render a results list', () => {
        const wrapper = shallow(<Calculator />, createMockStore(state)).dive();

        expect(wrapper.childAt(0).is(ResultsList)).to.equal(true);
        expect(wrapper.childAt(0).props()).to.deep.include({ history: ['foo'] });
    });

    it('should render an input group', () => {
        const wrapper = shallow(<Calculator />, createMockStore(state)).dive();

        expect(wrapper.childAt(1).is(InputGroup)).to.equal(true);
        expect(wrapper.childAt(1).props()).to.deep.include({
            error: false,
            value: ''
        });
    });

    it('should dispatch an onChange event when the input is changed', () => {
        const store = createMockStore(state);

        const wrapper = shallow(<Calculator />, store).dive();

        expect(store.isActionDispatched({ type: 'INPUT_CHANGED', value: 'foo' })).to.equal(false);

        wrapper.childAt(1).props().onChange({ target: { value: 'foo' } });

        expect(store.isActionDispatched({ type: 'INPUT_CHANGED', value: 'foo' })).to.equal(true);
    });

    it('should dispatch an appLoaded event when the results list is loaded', () => {
        const store = createMockStore(state);

        const wrapper = shallow(<Calculator />, store).dive();

        expect(store.isActionDispatched({ type: 'APP_LOADED' })).to.equal(false);

        wrapper.childAt(0).props().onLoad();

        expect(store.isActionDispatched({ type: 'APP_LOADED' })).to.equal(true);
    });
});

