import { expect } from 'chai';
import '../../browser';
import shallow from '../../shallow-with-store';
import { createMockStore } from 'redux-test-utils';
import React from 'react';
import ResultPreview from '../../../src/containers/ResultPreview';

describe('<ResultPreview />', () => {
    it('should render its basic structure', () => {
        const wrapper = shallow(<ResultPreview />, createMockStore({
            result: 5
        })).dive();

        expect(wrapper.is('div.result-preview')).to.equal(true);
        expect(wrapper.children()).to.have.length(2);

        expect(wrapper.childAt(0).is('span.before')).to.equal(true);
        expect(wrapper.childAt(0).text()).to.equal('Result: ');
    });

    it('should render the result', () => {
        const wrapper = shallow(<ResultPreview />, createMockStore({
            result: 5
        })).dive();

        expect(wrapper.childAt(1).is('span.result')).to.equal(true);
        expect(wrapper.childAt(1).text()).to.equal('5');
    });

    it('should not render if there is no result', () => {
        const wrapper = shallow(<ResultPreview />, createMockStore({
            result: null
        })).dive();

        expect(wrapper.get(0)).to.equal(null);
    });
});

