const Color = {
    RED: Symbol('RED'),
    GREEN: Symbol('GREEN'),
    BLUE: Symbol('BLUE'),


    getName(symbol) {
        for (const [key, value] of Object.entries(this)) {
            if (value === symbol && key !== 'getName') {
                return key;
            }
        }
        return undefined;
    }
};

const myColor = Color.RED;

console.log(myColor === Color.RED);
console.log(myColor === Symbol('RED'));

console.log(Color.getName(myColor));
console.log(Color.getName(Color.GREEN));


console.log(Color.getName(Symbol('FAKE'))); 
