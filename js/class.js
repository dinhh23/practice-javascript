// 
"option strict"

// class
class Student {
    name;
    favcolor;
    favnumber;

// constructor
    constructor(name, favcolor, favnumber) {
        this.name = name;
        this.favcolor = favcolor;
        this.favnumber = favnumber;
    }

// method within a class
    log() {
        console.log(this.name, this.favcolor, this.favnumber);
    }
}

// array with instances
let students = [
    new Student("Fred", "Green", 8),
    new Student("Wilma", "Red", 1),
    new Student("Barney", "Blue", 7),
    new Student("Betty", "Orange", 3),
    new Student("Pebbles", "Pink", 2)
];


// display method
const display = () => {
    // 1: Get programmatic access to the TBODY tag
    let tbody = document.getElementById("tbody");
    // 2: Clear 
    tbody.innerHTML = "";
    // Go thru list of students
    for(let s of students) {
       let tr = "<tr>";
       tr += `<td>${s.name}</td>`;
       tr += `<td>${s.favcolor}</td>`;
       tr += `<td>${s.favnumber}</td>`;
       tr += "</tr>";
       tbody.innerHTML += tr;
    }
}

const save = () => {
    let name = document.getElementById("name").value;
    let color = document.getElementById("color").value;
    let number = document.getElementById("number").value;

    let student = new Student(name, color, +number); // Number: convert number(string) to a Number(int) or + sign
    // add new student to existing array
    students.push(student);
    // display array to console to make sure a new student was added
    console.log(students);

}
