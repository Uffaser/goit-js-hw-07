const categoriesList = document.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach(el => {
    const category = el.firstElementChild.textContent;
    const elementsCount = el.lastElementChild.children.length;

    console.log(`Category: ${category}`);
    console.log(`Elements: ${elementsCount}`);
});
