const obj = {
    data: [10, 20, 30],
    [Symbol.iterator]() {
        let index = 0;
        const data = this.data;

        return {
            next() {
                if (index < data.length) {
                    return { value: data[index++], done: false };
                } else {
                    return { value: undefined, done: true };
                }
            },
            reset() {
                index = 0;
                return this;
            }
        };
    }
};

for (const a of obj) {
    console.log(a);
}


const iterator = obj[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next().value);
iterator.reset();
console.log(iterator.next().value); 