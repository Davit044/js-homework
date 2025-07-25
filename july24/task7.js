const obj = {
    data: [1, 2, 3, 4, 5],
    skipEven: false,

    *[Symbol.iterator]() {
        for (const a of this.data) {
            if (this.skipEven && a % 2 === 0) {
                continue;
            }
            yield a;

        }
    }
};

for (const b of obj) {
    console.log(b);
}

obj.skipEven = true;
console.log([...obj])