function showCurrentDateTime() {
    var currentDate = new Date();
    alert("Поточна дата і час: " + currentDate);
}
1111111111111111111111111111111111111111111111111
let age;
age = "Java skript";
1111111111111111111111111111111111111111111111111

let rezalt = 20==3;
let number1 = 10;
let number2 = 5;

console.log(number1 + number2);


let israining = false;
let iscloudy = true;
let temperature = 25;
let isWindy = true;

if(israining){
    console.log("Take en umbrella");
}
else if (iscloudy){
    console.log("Maybe take a light jacket");
}
else {
    console.log("Engoy the sunshine!");
}
if (temperature <= 15) {
    console.log("Вдягніться тепліше і візьміть шапку")
}
else (temperature > 15);
 {
    console.log("Хороший день для прогулянки");
}
if (isWindy) {
    console.log("Вдягніться тепліше і візьміть шапку");
}
else 
 {
    console.log("Хороший день для прогулянки");
}

for (let i = 1; i <= 10; i++) {
    console.log("iteration" + i);
}

//let count = 0;
//while (count <= 44) {
  //  console.log(count);
    //count++;
//}
console.log("Цикл завершено.");
111111111111111111111111111111111111111111111111
let fruts = ["bananas","apple","cherry"];
let firstFruits = fruts[0];

fruts.push("orange");
let remuvFruits = fruts.pop();
let firstRemuv = fruts.shift();
fruts.unshift("grape");

console.log(fruts);
console.log(firstFruits);
console.log(remuvFruits);
console.log(firstRemuv);


let vegetables = [ "carrot", "potato", "cucumber"];

vegetables.push("tomato");
let firstRemuvv = vegetables.shift();


console.log(vegetables);
console.log(firstRemuvv);
111111111111111111111111111111111111111111111111
function sum_xy(x =10, y = 20) {
    console.log(x + y);
}

sum_xy();
111111111111111111111111111111111111111111111111

function add(a, b) {
return a + b;
}
add(1,4);
add(5, 10);
add(100, 200);

111111111111111111111111111111111111111111111111

function square(x) {
    return x*x;
}
let result = square(3);
console.log(result * 2);

111111111111111111111111111111111111111111111111

function checkAge(age) {
    if (age >= 18) {
        return "You are an adult";
    } else {
        return "You are yong";
        }
}
1111111111111111111111111111111111111111111111
function number(w) {
    if (w % 2 == 0) {
        return "Parne";
    } else {
        return "Ne parne";
        }
}
1111111111111111111111111111111111111111
let phone = {
    brand: 'Pixel',
    color: 'Black',
    weight: 143
};

let keys = Object.keys(phone);
console.log(keys);  // ['brand','color','weight']

let values = Object.values(phone);
console.log(values);  // ['brand','color','weight']

phone.screenSize = '6 inches';
phone.color = 'White';

console.log(phone);

delete phone.weight;
console.log(phone);
11111111111111111111111111111111111111
let student = {
    name: `Alice`,
    age3: 29,
    year: 1970,
    subjects: [`English`,`Physik`,`Mathematik`],
    address: {
        street:'123 Main Street',
        city:'New York',
        state:'NY',
        zip: '1001'
    },

    '1st': 1,
    'last name': `Smith`,

    displayInfo: function() {
    console.log(`student ${this.name} vik ${this.age3} vuvchaestudent ${this.subjects}`);        
    },
    calculateAge: function (year_now) {
        return year_now - this.year;
    },
};

student.displayInfo();
console.log(student.name);
console.log(student['name']);

console.log(student['1st']);
console.log(student['last name']);

let key = 'address';
console.log(student[key]);

console.log(student.address.state);
console.log(student['address']['city']);



let age2 = student.calculateAge(3044);
console.log(age2);

for (let key in student) {
    console.log(key + ': ' + student[key]);
}

11111111111111111111111111111111111111

let globalVar = `I am a global varieble`;
function myFunc() {
    console.log(globalVar);

}
myFunc();
console.log(globalVar);
1111111111111111111111111111111111111

function myFunc2() {
    let localVar = `I am a local varieble`;
    console.log(localVar);

}
myFunc2();
//console.log(localVar);
111111111111111111111111111111111111111

//SPRET OPERETOR
let number12 = [1,2,3];
console.log(...number12);
console.log(number12);
 

//pruklad
let fruits3 = ["aple", "banana", "orange"];
let fruitsCopy = [...fruits3];
fruitsCopy.push("pear");
console.log (fruits3);
console.log (fruitsCopy);

//pryklad2
let cars2 = [{model: `Tesla`, color2: `read`}, {model: `Toyota`, color2: `blue`}];
let cars2Copy = [...cars2];
cars2Copy[0].color2 = 'black';
console.log(cars2);
console.log(cars2Copy);

//pryklad3
let colors4 = [`red`, `green`,`blue`];
let shapes = [`circle`, `squer`, `triangle`];
let colors4AndShapes = [...colors4, ...shapes];
console.log(colors4AndShapes);

//pryklad4
let numbersw = [1, 2, 3, 4, 5];
let newNumbers1 = [...numbersw.slice(0,2),6, 7, ...numbersw.slice(2)];
let newNumbers2 = [...numbersw, 6];
console.log (newNumbers1);
console.log (newNumbers2);


//FUNKTION EROW ES6
const square2 = (num1) => {
    return num1 * num1;
}

const square3 = num => num * num;
console.log(square2);

let multiply = (a, b) => a*b;
//DDDDDDDDDDDDDDZZZZZZZZZZZZZZZ
const squareArray = (numbers) => numbers.map(number => number ** 2);

const inputArray = [1, 2, 3, 4, 5];
const squaredNumbers = squareArray(inputArray);

console.log(squaredNumbers);
111111111111111111111111111111111111

//LITRALY
let x = 5;
let y = 10;
let sum = `The sum of ${x} and ${y} is ${x + y}.`;
console.log(sum);

//pryklad2
let age1 = 24;
let birthday = `Happy ${age1}th birthday!`;
console.log(birthday);

//pryklad3
let person = {
    namee: `Bob`,
    agee: 38,
    occupation: `teacher`
};
let introduction = `My name is ${person.namee}, I am ${person.agee} years old,
and I work as a ${person.occupation}.`;
console.log(introduction);

//pryklad4
let isEven = n => n % 2 === 0;
let numberp = 42;
let parity = `The number ${numberp} is ${isEven(numberp) ? `even` : `odd`}.`;
console.log(parity);

//pryklad5
const message = `Escape a backtick: \` inside template literal.`;
console.log(message);

//pryklad56   //z literalamy
let poem = `Do not go gentle into that good night,
Old age should burn and rave at close of day;
Rage, rage against the dying of the light.`;
console.log(poem);
//bez literaliv
let poem2 = "Do not go gentle into that good night, \n" +
"Old age should burn and rave at close of day; \n" + 
"Rage, rage against the dying of the light.\n";
console.log(poem2);

//DDDDDDDDDDDDDDDDDDDDDDDDDZZZZZZZZZZZZZZZZZZZZZZZZZ
let student1 = {
    namee: `Vova`,
    agee: 38,
    occupation: `teacher`,
};
let introduction1 = `My name is ${student1.namee}, I am ${student1.agee} years old,
and I stading a ${student1.occupation}.`;
console.log(introduction1);
1111111111111111111111111111111111111111111
function modifyArray(array, callback) {
    // Використовуємо метод map для застосування колбек-функції до кожного елементу масиву
    let modifiedArray = array.map(callback);
    return modifiedArray;
  }
  
  // Колбек-функція, яка множить кожен елемент на 2
  function multiplyByTwo(number) {
    return number * 2;
  }
  
  // Тестуємо функцію modifyArray
  let originalArray = [1, 2, 3, 4, 5];
  let newArray = modifyArray(originalArray, multiplyByTwo);
  
  console.log("Оригінальний масив:", originalArray);
  console.log("Модифікований масив (кожен елемент помножено на 2):", newArray);
  111111111111111111111111111111111111111111
//Timeseat timeout
 // console.log("Before set Timeout");

  //setTimeout(() => {
    //console.log("Inside set Timeout");

  //}, 3000 );

  //console.log("After set Timeout");

  //pryklad2
  