import { describe, it, expect } from 'vitest';
import { add, subtract, isEven } from '../../src/lib/utils/math.ts';

describe('math utils', () => {
  it('adds numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('subtracts numbers correctly', () => {
    expect(subtract(5, 3)).toBe(2);
  });

  it('adds two numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('returns true for even numbers', () => {
    expect(isEven(4)).toBe(true);
  });
});

// tests/math.test.ts
// import { describe, it, expect } from 'vitest';
// import { add, isEven } from '../src/utils/math';

// describe('math utilities', () => {
//   it('adds two numbers', () => {
//     expect(add(2, 3)).toBe(5);
//   });

//   it('returns true for even numbers', () => {
//     expect(isEven(4)).toBe(true);
//   });
// });
