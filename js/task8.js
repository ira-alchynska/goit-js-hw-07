//Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

//Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

//Каждый созданный div:

//Имеет случайный rgb цвет фона

//Размеры самого первого div - 30px на 30px

//Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px

//Создай функцию destroyBoxes(), которая очищает div#boxes.
const boxes = document.getElementById('boxes');
const destroyBoxes = function(){
boxes.innerHTML = '';
}
const backgroundColor = function () {
  return `background-color: rgb(${randomInteger()}, ${randomInteger()}, ${randomInteger()})`;
};
const randomInteger = function (max = 255, min = 0) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};
const createBoxes = function (amount) {
  let rez = [...Array(amount)]
    .map((item, index) => {
      return item +=`<div style = "width = ${30 + index * 10}px; heigth = ${
        30 + index * 10
      }px; ${backgroundColor()}" ></div>`;
    })
    //.reduce((acc, element) => {
    //  return (acc += element);
    //}, '');
    console.log(rez);
    boxes.innerHTML = rez;
    
};

const controls = document.querySelector('#controls');

controls.addEventListener('click', event => {
    let amount = controls.querySelector('input').value;
    
  let click = event.target.dataset.action;
 
   if (click === 'render') {
    console.log(amount);
     createBoxes(amount);
  } else if (click === 'destroy') {
     destroyBoxes();
  }
});








