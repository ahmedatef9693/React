class Human {
    gender = "Male";
    printGender = () => {
        console.log(this.gender);
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

export const species = "Homo sapiens";