const bottomUpFibonacci = (target: number): number => {
  if (target === 0) return 0;
  let a: number = 0, b: number = 1;
  for (let i = 1; i < target; i++) {
    const temp = a;
    a = b;
    b = temp + a;
  }
  return b;
};
console.log(bottomUpFibonacci(10))