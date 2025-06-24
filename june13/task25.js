const base = {
    building: {
        name: "Isakov",
        address: "123 Main St",
        floors: 5,
        rooms: 20
    },
    cost: 2330000
};

const child = {
    road: "Main St",
    distance: 100
}

Object.setPrototypeOf(child, base);

console.log(child.building.name);
