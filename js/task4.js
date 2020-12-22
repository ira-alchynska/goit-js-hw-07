//Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

//Создай переменную counterValue в которой будет хранится текущее значение счетчика.
//Создай функции increment и decrement для увеличения и уменьшения значения счетчика
//Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса


const valueRef = document.querySelector('#value');
const incrementBtn = document.querySelector("[data-action='increment']");
const decrementBtn = document.querySelector("[data-action='decrement']");

let counterValue = Number(valueRef.textContent);

const increment = () => {
  counterValue += 1;
  valueRef.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
};
incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);


