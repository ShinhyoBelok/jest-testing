const functions = require('./string');
const Calculator = require('./calculator');

test('Correctly count the string character', () => {
  expect(functions.stringLength('sieteu')).toBe('string is between 1-10 character');
});

test('Correctly reverse the string', () => {
  expect(functions.reverseString('sieteu')).toBe('ueteis');
});

test('Correctly capitalize string', () => {
  expect(functions.capitalize('sieteu')).toBe('Sieteu');
});

describe('calculator', () => {
  const cal = new Calculator();
  /* add */
  test('Correctly add-t1', () => {
    expect(cal.add(1, -3)).toBe(-2);
  });

  test('Correctly add-t2', () => {
    expect(cal.add(1, 7)).toBe(8);
  }); 

  test('Correctly add-t3', () => {
    expect(cal.add(-5, -3)).toBe(-8);
  });

  /* subtract */
  test('Correctly subtract-t1', () => {
    expect(cal.subtract(1, -3)).toBe(4);
  });

  test('Correctly subtract-t2', () => {
    expect(cal.subtract(1, 7)).toBe(-6);
  }); 

  test('Correctly subtract-t3', () => {
    expect(cal.subtract(-5, -3)).toBe(-2);
  });

  /* divide */
  test('Correctly div-t1', () => {
    expect(cal.div(1, 1)).toBe(1);
  });

  test('Correctly div-t2', () => {
    expect(cal.div(4, 2)).toBe(2);
  }); 

  test('Correctly div-t3', () => {
    expect(cal.div(10, 5)).toBe(2);
  });

  /* mult */
  test('Correctly mult-t1', () => {
    expect(cal.mult(1, 1)).toBe(1);
  });

  test('Correctly mult-t2', () => {
    expect(cal.mult(4, 2)).toBe(8);
  }); 

  test('Correctly mult-t3', () => {
    expect(cal.mult(10, 5)).toBe(50);
  });
});