/** 
Author : Build Rise Shine 

Created : 2023

Script : Interpolation Search 

Description : Implementation of Interpolation Search

    Interpolation search is a searching algorithm that improves on binary search by estimating 
    the position of the target value within a sorted array. It uses a formula to interpolate 
    the probable location based on the values of the first and last elements. 
    
    This approach allows for faster convergence towards the target, resulting in improved average-case 
    performance compared to binary search's constant halving.

(c) Copyright by BRS Studio. 
**/

// Interpolation Search
function interpolationSearch(array, target) {
  let low = 0;
  let high = array.length - 1;
  
  while (low <= high) {
    // Calculate the interpolated index
    let mid = low + Math.floor(((high - low) / (array[high] - array[low])) * (target - array[low]));

    // If the target is found, return the index
    if (array[mid] === target) {
      return mid;
    }

    // If the target is less than the middle element, search the lower half
    else if (target < array[mid]) {
      high = mid - 1;
    }

    // If the target is greater than the middle element, search the higher half
    else {
      low = mid + 1;
    }
  }

  // If the target is not found, return -1
  return -1;
}

// Implementataion
const array = [1, 3, 5, 7, 9, 11, 13, 15];
const item = 11;
const interpolation = interpolationSearch(array, item)
if(interpolation != -1){
    console.log(`The element ${item} is at index ${interpolation}`); 
}else{
    console.log(`The element ${item} is not found`); 
}

// BIG O Notation
// Time complexity -  O(log log n),
// Space complexity - O(1)
