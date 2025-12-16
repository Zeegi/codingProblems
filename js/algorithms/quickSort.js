// quick sorting algortihm


const testArray1 = [4, 6, 1, 7, 3, 2, 5, 23, 78, 2, 908, 45635, 1];


const swap = (array, firstIndex, secondIndex) => {
    const temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};


const pivot = (array, pivotIndex = 0, endIndex = array.length - 1) => {

    let swapIndex = pivotIndex;

    for (i = pivotIndex + 1; i <= endIndex; i++) {

        if (array[i] < array[pivotIndex]) {
            swapIndex++;
            swap(array, swapIndex, i)
        }

    }

    swap(array, pivotIndex, swapIndex);


    return swapIndex;

}


const quickSort = (array, left = 0, right = array.length - 1) => {

    if (left < right) {

        let pivotIndex = pivot(array, left, right);
        quickSort(array, left, pivotIndex - 1);
        quickSort(array, pivotIndex + 1, right);

    }
    return array;
}


console.log(quickSort(testArray1));