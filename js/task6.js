//Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
//Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
//Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.


function validInput(inputValue, number) {
  return inputValue.length <= number * 1 ? true : false;
}
const input = document.querySelector('#validation-input');

input.addEventListener('blur', event => {
 let rez = validInput(event.target.value, event.target.dataset.length);
  rez ? (input.classList.add('valid'), input.classList.remove('invalid')) : (
    input.classList.add('invalid'), input.classList.remove('valid')   
  )
});

