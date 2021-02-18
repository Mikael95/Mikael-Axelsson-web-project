function createCategory(id, imageURL, h3){

    let imgContainer = document.createElement('img');
    let h3Container = document.createElement('h3');
    
    
    imgContainer.src = imageURL;
    h3Container.textContent = h3;

    document.getElementById(id).appendChild(imgContainer);
    document.getElementById(id).appendChild(h3Container);

}


createCategory("category-1", "images/category-gear.jpg", "Gear");
createCategory("category-2", "images/category-clothes.jpg", "Clothes");
createCategory("category-3", "images/category-food.jpg", "Food");
