const str = "hello";

function Mylen(str) {

    let count = 0;
    while (str[count] != undefined) {
        ++count;
    }
    return count;
}

function len(str) {
    return str.length;
}
