// src/utils/math.ts
/**
 * Adds two numbers together.
 * @param a The first number.
 * @param b The second number.
 * @param n The number to check.
 * @returns The sum of a and b.
 */

export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export function add(a: number, b: number): number {
    return a + b;
}

export function isEven(n: number): boolean {
    return n % 2 === 0;
}
