import { convertToRomanNumerals } from './main';

describe('main', () => {

    it('should convert 1 to I', () => {
        expect(convertToRomanNumerals(1)).toEqual('I');
    });


});