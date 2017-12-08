import * as A from '../constants/actions';

export const inputChanged = value => ({ type: A.INPUT_CHANGED, value });

export const loadInitiated = () => ({ type: A.LOAD_INITIATED });

export const resultLoaded = res => ({ type: A.RESULT_LOADED, ...res });

