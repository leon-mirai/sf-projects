// class Person{
//     constructor(public name: string, public age:number = 18){
//         this.name = name;
//         this.age = age;
//     }
// }

class Person{
    name: string;
    age: number;

    constructor(name: string, age: number = 18) {
        this.name = name;
        this.age = age;
    }
}

const person:Person = new Person("Jill");
console.log("Hello " + person.name);
//const person = new Person();
//person.name = "Leon";
//person.age = 20;

//console.log(person);