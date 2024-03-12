// importing
const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected = 500;
    actual = sum(200, 300);
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    expected = -100;
    actual = sum(-30, -70);
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    expected = 5;
    actual = sum(5, 0);
    expect(actual).toBe(expected);
  });

});

describe('subtract', () => {
  test('can subtract two small positive numbers', () => {
    expected = -1;
    actual = subtract(2, 3);
    expect(actual).toBe(expected);
  });

  test('can subtract two large positive numbers', () => { 
    expected = -100;
    actual = subtract(200, 300);
    expect(actual).toBe(expected);
  });

  test('can subtract two negative numbers', () => {
    expected = 40;
    actual = subtract(-30, -70);
    expect(actual).toBe(expected);
  });

  test('can subtract zero', () => {
    expected = 5;
    actual = subtract(5, 0);
    expect(actual).toBe(expected);
  });

});

describe('multiply', () => {
  test('can multiply two small positive numbers', () => {
    expected = 6;
    actual = multiply(2, 3);
    expect(actual).toBe(expected);
  });

  test('can multiply two large positive numbers', () => { 
    expected = 60000;
    actual = multiply(200, 300);
    expect(actual).toBe(expected);
  });

  test('can multiply two negative numbers', () => {
    expected = 12;
    actual = multiply(-2, -6);
    expect(actual).toBe(expected);
  });

  test('can multiply zero', () => {
    expected = 0;
    actual = multiply(5, 0);
    expect(actual).toBe(expected);
  });

});

describe('divide', () => {
  test('can divide two small positive numbers', () => {
    expected = 3;
    actual = divide(6, 2);
    expect(actual).toBe(expected);
  });

  test('can divide two large positive numbers', () => { 
    expected = 3;
    actual = divide(600, 200);
    expect(actual).toBe(expected);
  });

  test('can divide two negative numbers', () => {
    expected = 3;
    actual = divide(-6, -2);
    expect(actual).toBe(expected);
  });

  test('can divide zero', () => {
    expected = Infinity;
    actual = divide(5, 0);
    expect(actual).toBe(expected);
  });


});

describe('modulus', () => {
  test('can modulus two small positive numbers', () => {
    expected = 0;
    actual = modulus(6, 2);
    expect(actual).toBe(expected);
  });

  test('can modulus two large positive numbers', () => { 
    expected = 0;
    actual = modulus(600, 200);
    expect(actual).toBe(expected);
  });

  test('can modulus two negative numbers', () => {
    expected = -0;
    actual = modulus(-6, -2);
    expect(actual).toBe(expected);
  });

  test('can modulus zero', () => {
    expected = NaN;
    actual = modulus(5, 0);
    expect(actual).toBe(expected);
  });


});

describe('even', () => {
  test('test small even numbers', () => {
    expected = 0;
    actual = even(6);
    expect(actual).toBe(expected);
  });

  test('test positive numbers', () => { 
    expected = 0;
    actual = even(800);
    expect(actual).toBe(expected);
  });

  test('test negative numbers', () => {
    expected = -0;
    actual = even(-6);
    expect(actual).toBe(expected);
  });

  test('test zero', () => {
    expected = 0;
    actual = even(0);
    expect(actual).toBe(expected);
  });

});

describe('odd', () => {
  test('test small odd numbers', () => {
    expected = 1;
    actual = odd(3);
    expect(actual).toBe(expected);
  });

  test('test positive odd numbers', () => { 
    expected = 1;
    actual = odd(301);
    expect(actual).toBe(expected);
  });

  test('test negative odd numbers', () => {
    expected = -1;
    actual = odd(-5);
    expect(actual).toBe(expected);
  });

  test('test zero', () => {
    expected = 0;
    actual = odd(0);
    expect(actual).toBe(expected);
  });


});
