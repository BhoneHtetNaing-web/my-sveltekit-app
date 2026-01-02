// src/main.ts or src/App.tsx
import { add, isEven } from './utils/math'; // Use relative or configured absolute paths

const num1 = 5;
const num2 = 10;

console.log(`The sum of ${num1} and ${num2} is: ${add(num1, num2)}`); // Output: 15
console.log(`Is ${num1} even? ${isEven(num1)}`); // Output: false
