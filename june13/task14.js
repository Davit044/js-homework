function addMethod(obj, methodName) {
    obj[methodName] = function () {
        return `Method ${methodName} was called`;
    };
}

const myObject = {};

addMethod(myObject, "greet");
addMethod(myObject, "sayBye");

console.log(myObject.greet());
console.log(myObject.sayBye()); 
