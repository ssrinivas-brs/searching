

// Linear Search - returns the index if the element is found or else returns -1
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

// Implementation
const item = 10    //item to search
const linSearch = linearSearch([1, 5, 2, 6, 65, 22, 33, 10, 22], item);
console.log(`Element ${item} found at index ${linSearch}`);


// BIG O Notation
// Time complexity - O(n)
// Space complexity - O(1)