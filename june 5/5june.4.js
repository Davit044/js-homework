function add(...args) {
    if (args.length === 2 || args.length === 3) {
        return args.reduce((sum, value) => sum + value, 0);
    } else {
        console.log("arguments have to be 2 or 3");
    }
}