import { describe, it, expect } from 'vitest';
import { add, subtract } from '../../src/lib/utils/math.js';

describe('math utils', () => {
  it('adds numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('subtracts numbers correctly', () => {
    expect(subtract(5, 3)).toBe(2);
  });
});
