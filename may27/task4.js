let str1 = "friends";
let str2 = "";
let count = str1.length - 1;

for (let i = 0; i < str1.length; ++i) {
    str2 += str1[count--];
}
console.log(str2);
