const str = "hello world";

function up(str) {
    return str.toUpperCase();
}

function MyUp(str) {
    let res = "";
    for(let ch of str) {
        if(ch >= 'a' && ch <= 'z') {
            res += String.fromCharCode(ch.charCodeAt(0) - 32);
        } else {
            res += ch;
          }
    }
    return res;
}
