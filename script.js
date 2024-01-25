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
let person = {
    name: "Alice",
    age: 25,
    hobbies: ['reading','cooking','traveling'],
    address: {
        street:'123 Main Street',
        city:'New York',
        state:'NY',
        zip: '1001'
    },

    '1st': 1,
    'last name': 'Smith',

    greet: function() {
        console.log ('Hello, my name is ${this.name}');        
    }
};

console.log(person.name);
console.log(person['name']);

console.log(person['1st']);
console.log(person['last name']);

let key = 'address';
console.log(person[key]);

console.log(person.address.state);
console.log(person['address']['city']);

person.greet();
11111111111111111111111111111111111111

//console person = {
   // name:'John',
   // year: 1970,
   // occupation:'Software Engineer',
    
//};