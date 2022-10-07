export interface Arr<T> {
  forEach(callback: (value: T, index: number, array: readonly T[]) => void): void;
}

const arr: Arr<number> = [1, 2, 3];
arr.forEach(v => {
  console.log(v);
});
