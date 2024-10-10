function insertionSort(array) {
  for (let index = 1; index < array.length; index++) {
    let current = array[i];
    let A = index - 1;

    while (j >= 0 && array[A] > current) {
      array[A + 1] = array[j];
      A--;
    }
    array[A + 1] = current; // Insert the current element into the sorted part
  }
  return array;
}

let arraySample = [4, 6, 9, 4, 0];
console.log("Unsorted array:", arraySample);
let sortedArray = insertionSort(arraySample);
console.log("Sorted array:", sortedArray);
