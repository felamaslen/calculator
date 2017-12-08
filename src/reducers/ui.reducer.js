export const changeInputValue = (state, { value }) => ({
    ...state,
    input: value
});

export function loadResult(state, { result, err }) {
    if (err) {
        return {
            ...state,
            result: null,
            error: true
        };
    }

    return {
        ...state,
        error: false,
        history: [
            ...state.history,
            {
                input: state.input,
                result
            }
        ],
        input: '',
        result
    };
}

