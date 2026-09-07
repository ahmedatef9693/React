import { Student, species } from './revision.js';

const student1 = new Student();
student1.setInfo("John", 30);
student1.setGrade("A");
console.log(student1.printInfos());


const student2 = new Student();
student2.setInfo("Jane", 25);
student2.setGrade("B");
console.log(student2.printInfos());

let student3 = cloneStudent(student1, { age: 20, grade: "C" });
const students = [student1, student2, student3];
let studentGrades = students.map(student => student.grade);
sortGrades(studentGrades, ["Z", "F"]);


function cloneStudent(source, overrides = {}) {
    const clone = new Student();
    clone.setInfo(source.name, source.age);
    clone.setGrade(source.grade);
    Object.assign(clone, overrides);
    return clone;
}


function sortGrades(...grades) {
    let allGrades = flattenArray(...grades);
    let sortedGrades = allGrades.sort();
    console.log("Sorted Grades:", sortedGrades);
}


function flattenArray(...arrays) {
    let allData = [];
    arrays.forEach(array => {
        if (typeof array === "object" && Array.isArray(array)) {
            allData = [...allData, ...array];

        }
    })

    return allData;
}