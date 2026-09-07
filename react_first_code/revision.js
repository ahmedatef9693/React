class Human {
    constructor() {
        this.gender = "";
    }
}





export class Person extends Human {
    constructor(name, age) {
        super()
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
    }
}

export const species = "Homo sapiens";