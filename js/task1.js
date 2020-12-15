let categories = document.querySelector('#categories');
//console.log(categories);
//let items = Array.from(categories.querySelectorAll('.item'));
//console.log(items);
let items = [...categories.querySelectorAll('.item')];
let itemsCount = items.length;
console.log(`В списке ${itemsCount} категории.`);
items.forEach(item => {
   let h2 = item.querySelector('h2').textContent;
   let li = [...item.querySelectorAll('ul li')];

   console.log(`Категория: ${h2}`)
   console.log(`Количество элементов: ${li.length}`)
   
})