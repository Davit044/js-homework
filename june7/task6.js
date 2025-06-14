function my_IndexOf(arr, searchel, fromindex = 0) {
    for (let i = fromindex; i < arr.length; i++) {
        if (arr[i] === searchel) {
            return i;
        }
    }
    return -1;
}

const arr = [3, 6, 9, 12];
console.log(my_IndexOf(arr, 9));
console.log(my_IndexOf(arr, 5));   