const evenOdd = require('./evenOdd');

const numEven = 10;
const numOdd = 11;

test("Cheque se o número é par", () => {
    expect(evenOdd.check(numEven)).toBe('even');
});

test("Cheque se o número é impar", () => {
    expect(evenOdd.check(numOdd)).toBe('odd');
});
 