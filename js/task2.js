//Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const createIngredient = (element, array) => {
  let itemArray = [];
  // console.log('element', element);
  // console.log('array', array);
  array.forEach(el => {
    const itemRef = document.createElement('li');
    itemRef.textContent = el;
    console.log(itemRef);
    itemArray.push(itemRef);
  });
  element.append(...itemArray);
};
createIngredient(document.querySelector('#ingredients'), ingredients);

/*let food = document.querySelector('#ingredients');
function addLi(ingredients, food) {
  let rez = ingredients
    .map(item => {
      //return `<li>${item}</li>`;
      let li = document.createElement('li');
       li.innerHTML = item;
       
       return li;
    })
    .reduce((acc, item) => { 
      
      return acc += item;

    });
//console.log(rez)
  //food.insertAdjacentElement('afterbegin', rez);
  food.innerHTML = rez;
}
addLi(ingredients, food);*/
