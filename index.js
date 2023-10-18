"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
}
class viceChancellor extends Person {
    constructor(name) {
        super(name);
    }
}
class Dean extends Person {
    constructor(name) {
        super(name);
    }
}
class Chairman extends Person {
    constructor(name) {
        super(name);
    }
}
class Teacher extends Person {
    constructor(name) {
        super(name);
    }
}
class Student extends Person {
    constructor(name) {
        super(name);
    }
}
class Department {
    name;
    chairman;
    teachers;
    constructor(name, chairman, teachers) {
        this.name = name;
        this.chairman = chairman;
        this.teachers = teachers;
    }
}
class Group {
    name;
    students;
    constructor(name, students) {
        this.name = name;
        this.students = students;
    }
}
class Faculty {
    name;
    dean;
    departments;
    constructor(name, dean, departments) {
        this.name = name;
        this.dean = dean;
        this.departments = departments;
    }
}
class University {
    viceChancellor;
    faculties;
    constructor(viceChancellor, faculties) {
        this.viceChancellor = viceChancellor;
        this.faculties = faculties;
    }
}
// Creating instances for the university, faculties, departments, groups, teachers, and students
const ViceChancellor = new viceChancellor('Dr. Rana Iqrar');
const agronomyChairman = new Chairman('Prof. Dr. Shafi Naazir');
const plantBreedingChairman = new Chairman('Prof. Dr. Manzoor Ahmed');
const agronomyDepartment = new Department('Agronomy', agronomyChairman, [
    new Teacher('Lala Naimat Sahib'),
    new Teacher('Dr. Maqsood Bajwa'),
    new Teacher('Dr. Ghazanfar Ali'),
    new Teacher('Dr. Tariq Mehmood'),
    new Teacher('Dr. Asghar Ali')
]);
const plantBreedingDepartment = new Department('Plant Breeding & Genetics', plantBreedingChairman, [
    new Teacher('Dr; Sadaqat Mehdi'),
    new Teacher('Iftikhar Ahmed'),
    new Teacher('Dr. Rana Amin'),
    new Teacher('Dr. Muhammad Saleem'),
    new Teacher('Dr. Hafeez Ahmed Sadaqat')
]);
const agricultureFaculty = new Faculty('Faculty of Agriculture', new Dean('Dr. Rafique Khan'), [agronomyDepartment, plantBreedingDepartment]);
const agriGroup87 = new Group('87-ag-agri', [
    new Student('Mr. Waheed Anjum Warraich'),
    new Student('Mr. Nazeer Khan'),
    new Student('Mr. Sabir Hussain'),
    new Student('Mr. Liaqat Ali Khan Rao'),
    new Student('Irfan Jaffar')
]);
const agriGroup86 = new Group('86-ag-agri', [
    new Student('Inam Masood'),
    new Student('Ijaz Ahmed'),
    new Student('Humayoun Akhtar'),
    new Student('Jaaved Iqbal'),
    new Student('Waaaseem Akhter')
]);
const university = new University(ViceChancellor, [agricultureFaculty]);
// Console the requested information
console.log('Name of University:', university.viceChancellor.name);
console.log('Name of Faculties:', university.faculties.map((faculty) => faculty.name));
console.log('Array/List of Department Names:');
university.faculties.forEach((faculty) => {
    faculty.departments.forEach((department) => {
        console.log(department.name);
    });
});
console.log('Name of Vice Chancellor:', university.viceChancellor.name);
console.log('Name of All Deans:');
university.faculties.forEach((faculty) => {
    console.log(faculty.dean.name);
});
console.log('Name of All Chairmans:');
university.faculties.forEach((faculty) => {
    faculty.departments.forEach((department) => {
        console.log(`${department.name} Chairman:`, department.chairman.name);
    });
});
console.log('Name of All Teachers:');
university.faculties.forEach((faculty) => {
    faculty.departments.forEach((department) => {
        department.teachers.forEach((teacher) => {
            console.log(`${department.name} Teacher:`, teacher.name);
        });
    });
});
console.log('Name of All Students:');
console.log('87-ag-agri Students:', agriGroup87.students.map((student) => student.name));
console.log('86-ag-agri Students:', agriGroup86.students.map((student) => student.name));
