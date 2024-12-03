import { expect, test } from "vitest";
import selectionSort from "./selection-sort.js";

test("sorts an array starting from the smallest element", () => {
  const array = [3, 5, 1, 2];
  const expected = [1, 2, 3, 5];

  const result = selectionSort(array);

  expect(result).toStrictEqual(expected);
});
