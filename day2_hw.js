//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

let food = (person3) => {
    let values = Object.values(person3)
    console.log(values);
}
food(person3)

// let food_object = (person3) => {
//     let food_key = Object.keys(person3);
//     let food_values = Object.values(person3);

//     if ( food_key.value === String) {
//         console.log(food_values)
//     } else if (food_key.value === Array) {
//         // turn to a string and console log
//     } else (food_key.value === Object); {
//         // turn to a Array then turn to a string and console log
//     }
// }
// food_object(person3);

// console.log(Object.keys(person3), Object.values(person3))

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name, age) {
    this.name = name;
    this.age = age;

    this.printInfo = () => {
        return `${this.name} is ${this.age} years old!`
    }

    this.incrementAge = (num) => {
        return `${this.age + num}`
        }
    }

let person1 = new Person("Cleofus", 167);
let person2 = new Person("Zorro", 45);
console.log(person1.printInfo());
console.log(person2.incrementAge(3));

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const bigWord = (string1) => {
    return new Promise( (resolve, reject) =>{
        if (string1.length > 10) {
            resolve(string1)
        } else {
            reject("nop")
        }
    })
}

bigWord("casino")
.then (
    (result) => {console.log(`Big Word: ${result}`)}
)
.catch(
    (error) => {console.log(`Small Number: ${error}`)}
);



