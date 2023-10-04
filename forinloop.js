const person = {
    name: "John",
    age: 30,
    job: "Engineer"
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}
