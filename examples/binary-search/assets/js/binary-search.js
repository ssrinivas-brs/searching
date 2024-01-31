

// Binary Search Algorithm
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;  // 9

  while (left <= right) { 
    const mid = Math.floor((left + right) / 2); //9/2 = 4, 5+9 = 14/2 = 7, 8+9 = 17/2 = 8, 9+9 = 18/2 = 9
    console.log(mid);
    if (arr[mid] === target) {
      return mid; // Found the target at index mid
    } else if (arr[mid] < target) { 
      left = mid + 1; // Target is in the right half //5, 8, 9
    } else {
      right = mid - 1; // Target is in the left half
    }
  }

  return -1; // Target element is not found in the array
}

//   Implementation
const sortedArray = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
const targetElement = 91;

const result = binarySearch(sortedArray, targetElement);

if (result !== -1) {
  console.log(`Element ${targetElement} found at index ${result}`);
} else {
  console.log(`Element ${targetElement} not found in the array`);
}

// BIG O Notation
// Time complexity - O(log n)
// Space complexity - O(1)
