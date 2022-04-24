import assert from "assert";
import { minusOne, fizzBuzz, readMemory } from "../build/debug.js";
assert.strictEqual(minusOne(5), 4);
assert.strictEqual(fizzBuzz(50), "fizz");
assert.strictEqual(readMemory(0), 42);
console.log("ok");
