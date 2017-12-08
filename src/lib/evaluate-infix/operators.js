export default {
    '*': (arg1, arg2) => arg1 * arg2,
    '/': (arg1, arg2) => arg1 / arg2,
    '+': (arg1, arg2) => arg1 + arg2,
    '-': (arg1, arg2) => arg1 - arg2,
    '^': (arg1, arg2) => arg1 ** arg2
}

export const PRECEDENCE = {
    '*': 1,
    '/': 1,
    '+': 2,
    '-': 2,
    '^': 0
};

