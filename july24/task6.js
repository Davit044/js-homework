
const obj = {
    data: ['1', '2', '3'],

    [Symbol.iterator]() {
        let index = this.data.length - 1;

        return {
            next: () => {
                if (index >= 0) {
                    return { value: this.data[index--], done: false };
                } else {
                    return { done: true };
                }
            }
        };
    }
};

for (const a of obj) {
    console.log(a);
}

const arr = [...obj];
console.log(arr);