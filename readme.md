# Sorti!

Sorti is a small JS Utils library for sorting.
{ selectionSort, insertionSort, bubbleSort, mergeSort }

# Usage
    const { mergeSort} = require('sorti');
    
    //Simple array with Numbers\Strings
    let unsortedArray = [ 11, 2, 93, 3, 12, 21, 50, 41 ];
    let sortedArray = mergeSort(unsortedArray) // [ 2, 3, 11, 12, 21, 41, 50, 93 ]
    
    //Array of objects - Sort by age attribute, desc.
    let objectsArray = new Array(1000).fill(0).map(item => {
        return { age: parseInt(Math.random() * 100) };
    })
    
    const options = {field: 'age', asc: false}
    let reverseSortedArray = mergeSort(unsortedArray, { asc: false })