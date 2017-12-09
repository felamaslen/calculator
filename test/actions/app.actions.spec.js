import { expect } from 'chai';
import * as A from '../../src/constants/actions';
import * as AA from '../../src/actions/app.actions';

describe('App actions', () => {
    describe('appLoaded', () => {
        it('should return APP_LOADED', () => {
            expect(AA.appLoaded()).to.deep.equal({ type: A.APP_LOADED });
        });
    });
});

