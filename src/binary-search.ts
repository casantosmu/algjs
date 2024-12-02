export default function binarySearch<T>(array: T[], item: T) {
  let low = 0;
  let hight = array.length - 1;
  while (low <= hight) {
    const mid = Math.floor((low + hight) / 2);
    const guess = array[mid];
    if (!guess) {
      throw new RangeError("Index out of bounds");
    }
    if (guess === item) {
      return mid;
    }
    if (guess > item) {
      hight = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return null;
}
