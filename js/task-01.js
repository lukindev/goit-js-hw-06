
const categoriesList = document.getElementById("categories");

console.log(`Number of categories: ${categoriesList.children.length}`);

Array.from(categoriesList.children).forEach((categoryItem) => {
  const categoryName = categoryItem.querySelector("h2").textContent;
  const categoryElements = categoryItem.querySelector("ul").children.length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements}`);
});
