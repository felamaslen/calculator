import * as A from '../constants/actions';

export const appLoaded = () => ({ type: A.APP_LOADED });

export const storedHistoryLoaded = history => ({ type: A.STORED_HISTORY_LOADED, history });

