let timer = document.getElementById("timer");
let seconds = 5;

timer.textContent = seconds;

function updateTimer() {
  seconds--;
  timer.textContent = seconds;

  if (seconds === 0) {
    timer.textContent = "Лічильник завершено!";
    clearInterval(timeout);
  }
}
let timeout = setInterval(updateTimer, 1000);
11111111111111111111111111111111111111111111111
let clock2 = document.getElementById("clock1");

function updateClock() {
  // Создаем объект Date для получения текущей даты и времени
  let date = new Date();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  clock2.textContent = `${hours}:${minutes}:${seconds}`;
}

let interval = setInterval(updateClock, 1000);

1111111111111111111111111111111111111111111111

let pattern = /[aeyuoi]/g; //i //m  //
let patern2 = new RegExp("patern");

let text = "Hello 3245-23-456 world!";
let isMatch = pattern.test(text); // true
console.log(isMatch);

let matches = text.match(pattern);
console.log(matches);

11111111111111111111111111111111111111111111

1111111111111111111111111111111111111111111111111

111111111111111111111111111111111111111111111

var person = {
  name: "John",
  age: 28,
  hobbies: ["swimming", "reading"]
};

// Перетворюємо об'єкт в рядок JSON
var jsonString = JSON.stringify(person);

// Виводимо результат у консоль
console.log(jsonString);