const items = document.getElementsByClassName('category');
const categoryEl = document.getElementsByClassName('catagory-buttons');

const categoryList = ['all'];

Array.prototype.forEach.call(items, item => {
    categoryList.push(item.children[0].children[1].children[0].innerHTML);
  });

const uniqueCategoryList = [...new Set(categoryList)];

uniqueCategoryList.forEach((unique) => {

  const btn = createBtn(unique, categoryEl);
 
    btn.addEventListener('click', () => {

      Array.prototype.forEach.call(items, item => {
        item.style.display = 'block';
         if(item.children[0].children[1].children[0].innerHTML !== unique) {
             item.style.display = 'none';
         }
         if (unique === 'all'){
            item.style.display = 'block';
         }
      })
    })
})

function createBtn(unique, categoryEl) {
  const btn = document.createElement("button");
  btn.innerHTML = unique;
  btn.classList.add('btn', 'btn--small');
  categoryEl[0].appendChild(btn);
  return btn;
}