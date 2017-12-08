import evaluateInfix from '../lib/evaluate-infix';

export function changeInputValue(state, { value }) {
    const nextState = {
        ...state,
        input: value
    };

    try {
        const result = evaluateInfix(value);

        return {
            ...nextState,
            result,
            error: false
        };
    }
    catch (err) {
        return {
            ...nextState,
            error: true
        };
    }
}

export function loadResult(state) {
    if (state.result && !state.error) {
        return {
            ...state,
            result: null,
            input: '',
            history: [
                ...state.history,
                {
                    input: state.input,
                    result: state.result
                }
            ]
        };
    }

    return state;
}

