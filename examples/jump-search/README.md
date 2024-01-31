## Jump Search

The jumpSearch function searches for the index of the target element in a sorted array array using the jump search algorithm. It divides the array into blocks and estimates the block in which the target might reside. It then performs a linear search within the identified block. If the target is not found, the function refines the search using binary search around the estimate.

The function returns the index of the target if found, or -1 if the target is not present in the array. Jump search is effective for large and sorted arrays.