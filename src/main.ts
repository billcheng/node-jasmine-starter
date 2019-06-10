const lookup = {
    'XC': 90,
    'L': 50,
    'XL': 40,
    'X': 10,
    'IX': 9,
    'V': 5,
    'IV': 4,
    'I': 1,
}

export const convertToRomanNumerals = (arabic: number) => {
    return Object.entries(lookup)
        .reduce((result, [roman, value]) => {
            while (arabic >= value) {
                arabic -= value;
                result += roman;
            }

            return result;
        }, '');
}