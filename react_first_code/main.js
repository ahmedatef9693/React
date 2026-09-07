import { Person, species } from './revision.js';

const person1 = new Person();
person1.setInfo("John", 30);
console.log(person1.printInfos());
person1.printGender()
console.log(species);