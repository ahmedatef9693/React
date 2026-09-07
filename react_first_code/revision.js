class Human {
    gender = "Male";
    printGender = () => {
        return this.gender;
    }

}


export class Person extends Human {
    name = "Ahmed";
    age = 28;
    setInfo = (name, age) => {
        this.name = name;
        this.age = age;
    }
    printInfos = () => {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
    }
}


export class Student extends Person {
    grade = "";
    setGrade = (grade) => {
        this.grade = grade;
    }

    printGrade = () => {
        return `My grade is ${this.grade}.`;
    }

    printInfos = () => {
        return `Hi, I'm ${this.name}, I'm ${this.age} years old and my grade is ${this.grade}.`;
    }
}


export const species = "Homo sapiens";