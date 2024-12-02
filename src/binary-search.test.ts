import { expect, test } from "vitest";
import binarySearch from "./binary-search.js";

test("returns index of element", () => {
  const arr = [1, 2, 3, 4, 5, 6];
  const item = 6;
  const expected = 5;

  const result = binarySearch(arr, item);

  expect(result).toBe(expected);
});

test("returns null if element does not exist", () => {
  const arr = [1, 2, 3, 4, 5, 6];
  const item = 7;
  const expected = null;

  const result = binarySearch(arr, item);

  expect(result).toBe(expected);
});
