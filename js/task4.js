//Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

//Создай переменную counterValue в которой будет хранится текущее значение счетчика.
//Создай функции increment и decrement для увеличения и уменьшения значения счетчика
//Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса


let counter = document.querySelector('#counter');
let counterValue = counter.querySelector('#value');
const increment = counterValue => {
  return (counterValue += 1);
};
function decrement(counterValue) {
  return (counterValue -= 1);
}

counter.addEventListener('click', event => {
 // console.log(event);
  let click = event.target.dataset.action;
  console.log(click)
  if (click === 'increment') {
    counterValue.textContent = increment(counterValue.textContent * 1);
  }else if(click === 'decrement') {
      counterValue.textContent = decrement(counterValue.textContent * 1);
  }
});
