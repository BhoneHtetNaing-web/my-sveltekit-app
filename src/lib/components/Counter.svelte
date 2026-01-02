<script>
  import { add, subtract } from '../utils/math.js';

  export let start = 0;
  let count = start;

  function increment() {
    count = add(count, 1);
  }

  function decrement() {
    count = subtract(count, 1);
  }
</script>

<style>
  .counter {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-family: system-ui, sans-serif;
  }
  button {
    font-size: 1.2rem;
    padding: 0.3rem 0.8rem;
    cursor: pointer;
  }
</style>

<div class="counter">
  <button on:click={decrement}>-</button>
  <span>Count: {count}</span>
  <button on:click={increment}>+</button>
</div>
