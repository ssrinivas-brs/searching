

// Fibonacci Algorithm
function fibonacciSearch(arr, target) {
  let fibNMinus2 = 0; // (n-2)th Fibonacci number
  let fibNMinus1 = 1; // (n-1)th Fibonacci number
  let fibN = fibNMinus2 + fibNMinus1; // nth Fibonacci number

  while (fibN < arr.length) {
    fibNMinus2 = fibNMinus1;
    fibNMinus1 = fibN;
    fibN = fibNMinus2 + fibNMinus1;
  }

  console.log(fibN);
  let offset = -1; // Offset from the start of the array
  
  while (fibN > 1) {
    const i = Math.min(offset + fibNMinus2, arr.length - 1);
    console.log(i);
    if (arr[i] === target) {
      return i; // Target found
    } else if (arr[i] < target) {
      fibN = fibNMinus1;
      fibNMinus1 = fibNMinus2;
      fibNMinus2 = fibN - fibNMinus1;
      offset = i;
    } else {
      fibN = fibNMinus2;
      fibNMinus1 = fibNMinus1 - fibNMinus2;
      fibNMinus2 = fibN - fibNMinus1;
    }
  }

  if (fibNMinus1 === 1 && arr[offset + 1] === target) {
    return offset + 1; // Check last element in case of remaining single element
  }

  return -1; // Target not found
}

// Implementation
const array = [1, 3, 5, 7, 9, 11, 13, 15]; // 0, 1, 1 ,2 ,3 ,5 ,8 ,13 ,21 ...
const item = 15;
const fibSearch = fibonacciSearch(array, item);
if (fibSearch != -1) {
  console.log(`The given element ${item} is at index ${fibSearch}`);
} else {
  console.log(`The given element ${item} is not found in the given array`);
}

// BIG O Notation
// Time complexity -  O(log n),
// Space complexity - O(1)
