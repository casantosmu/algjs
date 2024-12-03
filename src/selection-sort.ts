/* eslint-disable @typescript-eslint/no-non-null-assertion */
export default function selectionSort<T>(array: T[]) {
  const result = [...array];
  for (let i = 0; i < result.length - 1; i++) {
    let lowest = i;
    for (let j = i + 1; j < result.length; j++) {
      if (result[j]! < result[lowest]!) {
        lowest = j;
      }
    }
    if (lowest !== i) {
      const temp = result[i];
      result[i] = result[lowest]!;
      result[lowest] = temp!;
    }
  }
  return result;
}
