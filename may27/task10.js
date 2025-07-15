let arr = [12, 34, 89];

function Sum(arr) {
    return arr.reduce((sum, value) => sum + value, 0);
}

console.log(Sum(arr));
