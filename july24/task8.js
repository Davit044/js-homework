class Range {
    constructor(start, end, step = 1) {
        this.start = start;
        this.end = end;
        this.step = step;
    }

    *[Symbol.iterator]() {
        let current = this.start;


        if (this.step > 0) {
            while (current <= this.end) {
                yield current;
                current += this.step;
            }
        } else if (this.step < 0) {
            while (current >= this.end) {
                yield current;
                current += this.step;
            }
        }
    }
}


for (const num of new Range(1, 5)) {
    console.log(num);
}

for (const num of new Range(5, 0, -1)) {
    console.log(num);
}

console.log([...new Range(10, 15)]);