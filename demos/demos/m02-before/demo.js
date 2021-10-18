'use strict'; 

//Object Litteral
// (function() {

//     let person = {
//         firstName: 'Jim',
//         lastName: 'Cooper',
//         age: 29,
//         isAdult() { return this.age >= 18}
//     }
    
//     for (let propertyName in person) {
//         display(propertyName)
//     }

// })();

// (function() {
//     function registerUser(firstName, lastName) {
//         let person = {
//             firstName,
//             lastName
//         }
//         display(person)
//     }

//     registerUser('Jim', 'Cooper')

// })()

//Merge Objects without changing origonal object
(function() {

    let person1 = {
        firstName: 'Jim',
        lastName: 'Cooper',
        age: 29,
        isAdult() { return this.age >= 18}
    }
    
    let healthStats = {
        height: 68,
        weight: 150
    }

    function mergeHealthStats(person, healthStats) {
        return Object.assign({}, person1, healthStats)
    }

    let mergedPerson = mergeHealthStats(person1, healthStats)
    display(mergedPerson)

    display(person1)

})();

//Constructor Functions
(function() {

    // let jim = {
    //     firstName: 'Jim',
    //     lastName: 'Cooper',
    //     age: 29,
    //     isAdult() { return this.age >= 18}
    // }
    
    // display(jim.isAdult())

    // let sofia = {
    //     firstName: 'Sofia',
    //     lastName: 'Cooper',
    //     age: 17,
    //     isAdult() { return this.age >= 18}
    // }

    // display(sofia.isAdult())

    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.isAdult = function() { return this.age > 21; }
    }

    let jim = new Person('Jim', "Cooper", 29);
    let sofia = new Person('Sofia', 'Cooper', 17);

    display(jim.isAdult());
    display(sofia.isAdult());

})();

//Object.create
(function() {
    let person1 = {
        firstName: 'Jim',
        lastName: 'Cooper',
        age: 29,
    }

    let person2 = Object.create(
        Object.prototype,
        {
            firstName: {value: 'Jim', enumerable:true, writable:true, configurable:true},
            lastName:{value: 'Cooper', enumerable:true, writable:true, configurable:true},
            age: {value: 29, enumerable:true, writable:true, configurable:true}
        }
    )

    display(person1)
    display(person2)

})()