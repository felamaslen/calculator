import OPERATORS from './operators';
import infixToPostfix from './infix-to-postfix';

function evaluatePostfix(raw) {
    if (!raw.length) {
        throw new Error('invalid string');
    }

    const result = raw
        .replace(/(\s+|,)/, ' ')
        .split(' ')
        .reduce((stack, char) => {
            if (char in OPERATORS) {
                const arg2 = stack.pop();
                const arg1 = stack.pop();

                return [...stack, OPERATORS[char](arg1, arg2)];
            }

            return [...stack, Number(char)];

        }, []);

    if (result.length !== 1) {
        throw new Error('invalid string');
    }

    return result[0];
}

export default function evaluateInfix(raw) {
    const postfix = infixToPostfix(raw);

    const result = evaluatePostfix(postfix);

    if (result === null || isNaN(result)) {
        throw new Error('invalid string');
    }

    return result;
}
