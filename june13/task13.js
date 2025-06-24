function countProperties() {

    let count = 0;

    for (let key in obj) {
        ++count;
    }

    return count;

}