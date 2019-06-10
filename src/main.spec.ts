import { convertToRomanNumerals } from './main';

describe('main', () => {

    it('should convert 1 to I', () => {
        expect(convertToRomanNumerals(1)).toEqual('I');
    });

    it('should convert 2 to II', () => {
        expect(convertToRomanNumerals(2)).toEqual('II');
    })

    it('should convert 3 to III', () => {
        expect(convertToRomanNumerals(3)).toEqual('III');
    })

    it('should convert 4 to IV', () => {
        expect(convertToRomanNumerals(4)).toEqual('IV');
    })

    it('should convert 5 to V', () => {
        expect(convertToRomanNumerals(5)).toEqual('V');
    })

    it('should convert 6 to VI', () => {
        expect(convertToRomanNumerals(6)).toEqual('VI');
    })

    it('should convert 7 to VII', () => {
        expect(convertToRomanNumerals(6)).toEqual('VI');
    })

    it('should convert 8 to VIII', () => {
        expect(convertToRomanNumerals(8)).toEqual('VIII');
    })

    it('should convert 9 to IX', () => {
        expect(convertToRomanNumerals(9)).toEqual('IX');
    })

    it('should convert 10 to X', () => {
        expect(convertToRomanNumerals(10)).toEqual('X');
    });

    it('should convert 20 to XX', () => {
        expect(convertToRomanNumerals(20)).toEqual('XX');
    });

    it('should convert 30 to XXX', () => {
        expect(convertToRomanNumerals(30)).toEqual('XXX');
    });

    it('should convert 40 to XL', () => {
        expect(convertToRomanNumerals(40)).toEqual('XL');
    });

    it('should convert 50 to L', () => {
        expect(convertToRomanNumerals(50)).toEqual('L');
    });

    it('should convert 70 to LXX', () => {
        expect(convertToRomanNumerals(70)).toEqual('LXX');
    });

    it('should convert 90 to XC', () => {
        expect(convertToRomanNumerals(90)).toEqual('XC');
    });

    it('should convert 55 to LIV', () => {
        expect(convertToRomanNumerals(55)).toEqual('LV');
    });

    it('should convert 99 to XCIX', () => {
        expect(convertToRomanNumerals(99)).toEqual('XCIX');
    });

});