const romanSets = [
    ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
    ['X','XX','XXX','XL','L','LX','LXX','LXXX','XC']
];

export const convertToRomanNumerals = (arabic: number) => {
    let result = [];
    const myRomanSets = [...romanSets];
    while (arabic > 0) {
        const romanSet = myRomanSets.shift();
        const digit = arabic % 10;
        arabic = Math.floor(arabic / 10);
        result.unshift(romanSet[digit - 1]);
    }
    return result.join('');
}
