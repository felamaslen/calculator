import formatInfix from '../lib/format-infix';
import evaluateInfix from '../lib/evaluate-infix';

export const onStoredHistoryLoaded = (state, { history }) => ({
    ...state,
    history: history.map(command => ({
        input: formatInfix(command),
        result: evaluateInfix(command)
    }))
});

