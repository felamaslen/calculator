/* eslint-disable global-require, lines-around-comment */
import initialState from '../initialState';

let configStore = null;

/* IFDEV */
configStore = require('./configureStore.dev').default;
/* ENDIF */
/* IFPROD */
configStore = require('./configureStore.prod').default;
/* ENDIF */

const store = configStore(initialState);

export default store;

