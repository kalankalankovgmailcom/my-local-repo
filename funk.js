// Функція вищого порядку modifyArray
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
  