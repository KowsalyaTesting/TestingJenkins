const { add, subtract, multiply, divide } = require('../src/calculator');

describe('Calculator - Addition', () => {
  test('should add two positive numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('should add negative numbers correctly', () => {
    expect(add(-2, -3)).toBe(-5);
  });

  test('should add zero correctly', () => {
    expect(add(0, 5)).toBe(5);
  });
});

describe('Calculator - Subtraction', () => {
  test('should subtract two positive numbers correctly', () => {
    expect(subtract(10, 3)).toBe(7);
  });

  test('should subtract resulting in negative', () => {
    expect(subtract(3, 10)).toBe(-7);
  });
});

describe('Calculator - Multiplication', () => {
  test('should multiply two positive numbers', () => {
    expect(multiply(4, 5)).toBe(20);
  });

  test('should multiply by zero', () => {
    expect(multiply(5, 0)).toBe(0);
  });
});

describe('Calculator - Division', () => {
  test('should divide two numbers correctly', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('should throw error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero is not allowed');
  });
});
