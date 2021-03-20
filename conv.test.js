const { test } = require('@jest/globals');
const arabicToRoman = require('./arabicToRoman');
const romanToArabic = require('./romanToArabic');

test('shoud return I when : 1 entered', () => {
    expect (arabicToRoman(1)).toBe('I');
});

test('shoud return IV when : 4 entered', () => {
    expect (arabicToRoman(4)).toBe('IV');
});

test('shoud return V when : 5 entered', () => {
    expect (arabicToRoman(5)).toBe('V');
});

test('shoud return IX when : 9 entered', () => {
    expect (arabicToRoman(9)).toBe('IX');
});

test('shoud return X when : 10 entered', () => {
    expect (arabicToRoman(10)).toBe('X');
});

test('shoud return XL when : 40 entered', () => {
    expect (arabicToRoman(40)).toBe('XL');
});

test('shoud return L when : 50 entered', () => {
    expect (arabicToRoman(50)).toBe('L');
});

test('shoud return XC when : 90 entered', () => {
    expect (arabicToRoman(90)).toBe('XC');
});

test('shoud return C when : 100 entered', () => {
    expect (arabicToRoman(100)).toBe('C');
});

test('shoud return CXLVI when : 146 entered', () => {
    expect (arabicToRoman(146)).toBe('CXLVI');
});

test('shoud return CD when : 400 entered', () => {
    expect (arabicToRoman(400)).toBe('CD');
});

test('shoud return D when : 500 entered', () => {
    expect (arabicToRoman(500)).toBe('D');
});

test('shoud return CM when : 900 entered', () => {
    expect (arabicToRoman(900)).toBe('CM');
});

test('shoud return CMLXII when : 962 entered', () => {
    expect (arabicToRoman(962)).toBe('CMLXII');
});

test('shoud return M when : 1000 entered', () => {
    expect (arabicToRoman(1000)).toBe('M');
});

test('shoud return 1 when : I entered', () => {
    expect (romanToArabic('I')).toBe(1);
});

test('shoud return 962 when : CMLXII entered', () => {
    expect (romanToArabic('CMLXII')).toBe(962);
});