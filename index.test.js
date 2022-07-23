const cal = require('./index');
const inputString = require('./index');
const rev = require('./index');
const cap = require('./index');


describe('calculator', () => {
    test('add', () => {
        expect(cal.calculator.add(1,1)).toBe(2);
    });

    test('multiply', () => {
        expect(cal.calculator.multiply(5,6)).toBe(30);
    });

    test('subtract', () => {
        expect(cal.calculator.subtract(3,2)).toBe(1);
    });

    test('divide', () => {
        expect(cal.calculator.divide(4,2)).toBe(2);
    });
});

describe('stringLength', () => {

    it('stringLength characters count', () => {
    expect(inputString.stringLength('mihreteab')).toBe(9);
    });

    it('stringLength is at least 1 character long', () => {
    expect(inputString.stringLength('mre')).toBeGreaterThan(0);
    });

    it('stringLength is longer than 10 characters', () => {
    expect(inputString.stringLength('mre')).toBeLessThan(10);
    });
});

describe('reverseString', () => {

    test('reverseString function', () => {
        expect(rev.reverseString('mre')).toBe('erm');
    });
});

describe('Capitalize', () => {

    test('capitalize the string', () => {
        expect(cap.capitalizer('abc')).toBe('Abc');
    });

    test('Capitalize class', () => {
        expect(new cap.CapitalizeClass().name('aa')).toBe('aa');
    });
});
