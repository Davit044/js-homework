function my_Some(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return true;
        }
    }
    return false;
}

const arr = [1, 2, 3, 4];
const evens = my_Some(arr, function (num) {
    return num % 2 === 0;
});
console.log(evens);