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

//Merge Objects without changing origonal object---------------

// (function() {

//     let person1 = {
//         firstName: 'Jim',
//         lastName: 'Cooper',
//         age: 29,
//         isAdult() { return this.age >= 18}
//     }
    
//     let healthStats = {
//         height: 68,
//         weight: 150
//     }

//     function mergeHealthStats(person, healthStats) {
//         return Object.assign({}, person1, healthStats)
//     }

//     let mergedPerson = mergeHealthStats(person1, healthStats)
//     display(mergedPerson)

//     display(person1)

// })();

//Constructor Functions-----------------

// (function() {

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

//     function Person(firstName, lastName, age) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//         this.isAdult = function() { return this.age > 21; }
//     }

//     let jim = new Person('Jim', "Cooper", 29);
//     let sofia = new Person('Sofia', 'Cooper', 17);

//     display(jim.isAdult());
//     display(sofia.isAdult());

// })();

//Object.create---------------------------

// (function() {
//     let person1 = {
//         firstName: 'Jim',
//         lastName: 'Cooper',
//         age: 29,
//     }

//     let person2 = Object.create(
//         Object.prototype,
//         {
//             firstName: {value: 'Jim', enumerable:true, writable:true, configurable:true},
//             lastName:{value: 'Cooper', enumerable:true, writable:true, configurable:true},
//             age: {value: 29, enumerable:true, writable:true, configurable:true}
//         }
//     )

//     display(person1)
//     display(person2)

// })()

//Object Properties-------

// (function() {
//     let person = {
//         firstName: 'Jim',
//         lastName: 'Cooper',
//         age: 29,
//     }

//    for (let propertyName in person) {
//        display(propertyName + '; ' + person[propertyName])
//    }

// })()

// (function() {
//     let person = {
//         name: {
//             firstName: 'Jim',
//             lastName: 'Cooper',
//         },
//         age: 29
//     }

//     Object.defineProperty(person, 'name', {writable: false})

//    person.name.firstName = 'Kris'

//    display(person.name)

// })()

//numerable attribute----------

// (function() {
//     let person = {
//         firstName: 'Jim',
//         lastName: 'Cooper',
//         age: 29,
//     }

//     Object.defineProperty(person, 'firstName', {enumerable: false})

//    for (let propertyName in person) {
//        display(propertyName + '; ' + person[propertyName])
//    }

//    display(Object.keys(person))

// })()

//Configureable property-----------

// (function() {
//     let person = {
//         firstName: 'Jim',
//         lastName: 'Cooper',
//         age: 29,
//     }

//    Object.defineProperty(person, 'firstName', {configurable: false})

//     delete person.firstName

//     display(person)

// })()

//Getter setter------------

// (function() {
//     let person = {
//         name: {
//             first: 'Jim',
//             last: 'Cooper',
//         },
//         age: 29
//     }

//     Object.defineProperty(person, 'fullName', 
//     {
//         get: function() {
//             return this.name.first + ' ' + this.name.last
//         },
//         set: function(value) {
//             var nameParts = value.split(' ')
//             this.name.first = nameParts[0]
//             this.name.last = nameParts[1]
//         }
//     })

//     person.fullName = 'Fred Jones'

//     display(person.fullName)

//     display(person.name.first)
//     display(person.name.last)

// })()

//Prototypes----------------

// (function() {

//     function Person(firstName, lastName) {
//                 this.firstName = firstName;
//                 this.lastName = lastName;
//     }

//     Person.prototype.age = 29

//     display(Person.prototype)

//     let jim = new Person('Jim', 'Cooper')
//     let sofia = new Person('Sofia', 'Cooper')
//     sofia.__proto__.age = 19

//     display(jim.__proto__)
//     display(sofia.__proto__)

//     display(Person.prototype === jim.__proto__)

// })()

//instance vs prototype proper-------------------

// (function() {

//     function Person(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     Person.prototype.age = 29

//     let jim = new Person('Jim', 'Cooper')
//     let sofia = new Person('Sofia', 'Cooper')
   
//     jim.age = 18
//     display(jim.hasOwnProperty('age'))
//     display(jim.age)
// })()


//Creating Prototypal Inheiritance Chain----------------------------------------------

// (function() {

//     function Person(firstName, lastName, age) {
//         this.firstName = firstName
//         this.lastName = lastName
//         this.age = age
//         Object.defineProperty(this, 'fullName', {
//             get: function() {
//                 return this.firstName + ' ' + this.lastName
//             },

//             enumerable: true
//         })
//     }

//     function Student(firstName, lastName, age) {
//         Person.call(this, firstName, lastName, age)
//         this._enrolledCourses = []

//         this.enroll = function(courseId) {
//             this._enrolledCourses.push(courseId)
//         }

//         this.getCourses = function() {
//             return this.fullName + "'s enrolled courses are: " + this._enrolledCourses.join(', ')
//         }
//     }
//     display(Student.prototype.constructor = Student)

//     Student.prototype = Object.create(Person.prototype)
//     Student.prototype.constructor = Student

//     let jim = new Student('Jim', 'Cooper', 29)



//     jim.enroll('cs205')
//     jim.enroll('ma101')
//     jim.enroll('ps101')
//     display(jim.getCourses())

// })

//JavaScript Classes-------------------------------------------------------

(function() {

    class Person {
        constructor(firstName, lastName, age) {
            this.firstName = firstName
            this.lastName = lastName
            this.age = age
        }
        get fullName() {
            return this.firstName + ' ' + this.lastName
        }
        set fullName(fullName){
            var nameParts = fullName.split(' ')
            this.firstName = nameParts[0]
            this.lastName = nameParts[1]
        }

        isAdult() { 
            return this.age >= 18
        }

    }
    class Student extends Person{
        constructor(firstName, lastName, age){
            super(firstName, lastName, age)
            this._enrolledCourses = []
        }

        static fromPerson(person) {
            return new Student(person.firstName, person.lastName, person.age)
        }

        enroll(courseId) {
            this._enrolledCourses.push(courseId)
        }

        getCourses() {
            return this.fullName + "'s enrolled courses are: " + this._enrolledCourses.join(', ')
        }

    }
   
    let jim = new Person('Jim', 'Cooper', 29)

    // jim.enroll('cs205')
    // jim.enroll('ma101')
    // jim.enroll('ps101')

    let jimStudent = Student.fromPerson(jim)

    display(jimStudent)
})()

