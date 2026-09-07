export class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
    }
}

export const species = "Homo sapiens";