function pivot(arr, start = 0, end = arr.length - 1) {
  function swap(array, i, j) {
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;    
  }
  var pivot = arr[start];
  var swapIdx = start;
  for(let i = start + 1; i < arr.length; i++) {
      if(pivot > arr[i]) {
          swapIdx++;
          swap(arr, swapIdx, i);
      }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if(left < right) {
      let pivotIndex = pivot(arr, left, right);
      quickSort(arr, left, pivotIndex - 1);
      quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}
console.log(quickSort([4, 8, 2, 1, 9, 10, 5, 3]));