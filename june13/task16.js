const user = {
    name: "Abgar",
    isStudent: true
}

const { name, age = 18, isStudent } = user;

console.log(age); 