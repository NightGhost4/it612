// #1
const addTax = (price, rate) => price + (price * rate);

console.log("Task 1 - addTax:");
console.log(addTax(100, 0.1));
console.log(addTax(50, 0.2)); 


// #2
const createBurner = (secret, limit) => {
    let count = 0;
    return () => {
        if (count < limit) {
            count++;
            return secret;
        }   
        return "Secret burned!";
    };
};

console.log("\nTask 2 - createBurner:");
const burner = createBurner("my-secret-code", 3);
console.log(burner());  
console.log(burner());  
console.log(burner());


// #3
const person = {
    name: "John",
    age: 25,
    address: {
        city: "New York",
        zip: "10001"
    },
    hobbies: ["reading", "coding"]
};

const jsonString = JSON.stringify(person);
console.log("\nTask 3 - JSON:");
console.log("Stringified:", jsonString);

const parsedObject = JSON.parse(jsonString);
console.log("Parsed back:", parsedObject);
console.log("Nested access:", parsedObject.address.city);