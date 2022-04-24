// import { log } from "./env"

export function minusOne(x: i32): i32 {
  // log(x);
  if (x == 100) abort();
  return x - 1;
}

export function fizzBuzz(x: i32): string {
  if (x % 15 == 0) return "fizzbuzz";
  if (x % 5 == 0) return "fizz";
  if (x % 3 == 0) return "buss";
  return "";
}

memory.grow(2);
store<u8>(0, 42);
store<u8>(1, 69);

export function readMemory(n: i32): i32 {
  return load<u8>(n);
}
