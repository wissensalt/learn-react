export const plus = (fistValue, secondValue) => {
    return {
        type: 'PLUS',
        payload: {
            firstValue: fistValue,
            secondValue: secondValue
        }
    }
}

export const minus = (firstValue, secondValue) => {
    return {
        type: 'MINUS',
        payload: {
            firstValue: firstValue,
            secondValue: secondValue
        }
    }
}

export const multiply = (firstValue, secondValue) => {
    return {
        type: 'MULTIPLY',
        payload: {
            firstValue: firstValue,
            secondValue: secondValue
        }
    }
}

export const divide = (firstValue, secondValue) => {
    return {
        type: 'DIVIDE',
        payload: {
            firstValue: firstValue,
            secondValue: secondValue
        }
    }
}