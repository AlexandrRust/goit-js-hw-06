const categoriesList = document.getElementById('categories');
const categoriesItemNumber = categoriesList.childElementCount;
const categoriesItems = document.querySelectorAll('.item');


console.log(`Number of categories: ${categoriesItemNumber}`);

categoriesItems.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent} 
Elements: ${element.lastElementChild.childElementCount}`);
});

