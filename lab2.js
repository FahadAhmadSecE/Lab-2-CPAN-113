//Task 1
console.log("Task 1");
console.log("  ")
let x = 1;

if (x > 0) {
    console.log("This is a positive number");
} else if (x < 0) {
    console.log("This is a negative number");
} else {
    console.log("This is a zero");
}

let grade = ""

switch (grade) {

    case "A":
        console.log("Congrats on getting an A");
        break;

    case "B":
        console.log("Congrats on getting a B, improvements can be made");
        break;

    case "C":
        console.log("You can do better than a C");
        break;

    case "D":
        console.log("You need to do better if you want to pass");
        break;

    case "F":
        console.log("You failed");
        break;

    default :
    console.log("No grade");
}
console.log("  ");

//Task 2
console.log("Task 2");
console.log("  ");
let count = 1;
while (count <= 10) {
    console.log(count);
    count++;
}

let num = 1;
do {
    console.log(num * 3);
    num++;
} while (num <= 3)

const colors = ["Red", "Green", "Blue"];

for (let i = 0; i <= 2; i++) {
    console.log(colors[i]);
}
console.log("  ");

//Task 3
console.log("Task 3");
console.log("  ")
let person = { name: "Fahad", age: "18", school: "Humber Polytechnic" };

for (let key in person) {
    console.log(key + ": " + person[key]);
}

let grades = [75, 80, 85, 90, 95];

for (let grade of grades) {
    console.log(grade);
}
console.log("");

//Task 4
console.log("Task 4");
console.log("  ");

let county = 1;
while (county <= 10) {
    if (county == 5) {
        break;
    }
    console.log(county);
    county++;
}

console.log("");

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let num of numbers) {
    if ((num % 2) == 1) {
        continue;
    }

    console.log(num);
}








