var obj = {
    "first_name": "Aayush",
    "last_name": "Sinha",
    "email": "aayush.aryan@me.com",
    "website": "sdfhsdhfjds",
    "k": "This is Key K's value",
    "students": [
        {
            "name": "Name 1",
            "marks": 15
        },
        {
            "name": "Name 2",
            "marks": 17
        },
        {
            "name": "Name 3",
            "marks": 19
        },
        {
            "name": "Name 4",
            "marks": 21
        },
        {
            "name": "Name 5",
            "marks": 0
        },
        {
            "name": "Name 6",
            "marks": 27
        },
    ],
};

var num = Number(prompt("Enter a number:"));
var studentsArray = [];

if (isNaN(num)) {
    console.log(`Please enter a valid number!`);
} else {
    for (var i = 0; i < obj.students.length; i++) {
        if (obj.students[i].marks >= num) {
            studentsArray.push(obj.students[i].name);
        }
    }
}

if (studentsArray.length == 0) {
    console.log(`Student's names are unavailable!`);
} else {
    console.log(`The studens who got marks equal or greater than ${num} : ${studentsArray}.`);
}