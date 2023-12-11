newPageTitle = 'Modifying the DOM';
document.title = newPageTitle;
console.log(newPageTitle);
document.body.style.backgroundColor =  "rgb(255, 45, 255, 0.7)";
const secondChild = document.body.children[1];
for (const childElement of secondChild.children) {
  console.log(childElement);
}
