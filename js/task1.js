//const itemCategories = document.querySelectorAll('item');
//console.log(`В списке ${itemCategories.length} категории.`);

//itemCategories.forEach(element => 
   //console.log(`Категория: ${element.firstElementChild.textContent}, 
   //Количество елементов: ${element.lastElementChild.children.length}`)
//);

const itemCategories = document.querySelectorAll('.item');
console.log(`В списке ${itemCategories.length} категории`);

itemCategories.forEach((element) => {
    const categories = element.querySelector('h2').textContent;
    const quantityCategories = element.querySelectorAll('li').length;
  
console.log(`Категория: ${categories} 
Количество элементов: ${quantityCategories}`)  
});