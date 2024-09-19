const favLang = ['JavaScript', 'Python', 'C', 'C++'];

favLang.forEach(function(currValue) {
    console.log(currValue);
})

favLang.forEach(function(val, ind) {
    console.log(ind + " " + val);
})

// Create one array. For Each Element in the array add the value 100 to each items and update the Element value.

const newArr = [10, 20, 30, 40, 50];

newArr.forEach(function(currVal, ind, arr) {
    console.log(arr[ind] + 100);
})