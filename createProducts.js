function createProduct(id, imageURL, h3, h4, stars, para){

    let imgContainer = document.createElement('img');
    let h3Container = document.createElement('h3');
    let h4Container = document.createElement('h4');
    let divContainer = document.createElement('div');
    let paraContainer = document.createElement('p');

    imgContainer.src = imageURL;
    h3Container.textContent = h3;
    h4Container.textContent = h4;
    divContainer.className = "rating";

    let iContainers = [i1, i2, i3, i4, i5];
    for(var i = 0; i < 5; i++){
        if(i <= stars){
            iContainers[i] = document.createElement('i');
            iContainers[i].className = star1;
            divContainer.appendChild(iContainers[i]);
        }
        else{
            iClasses.push(star2);
            iContainers[i] = document.createElement('i');
            iContainers[i].className = star2;
            divContainer.appendChild(iContainers[i]);
        }
    }



    paraContainer.textContent = para;
}

star1 = "fa fa-star";
star2 = "fa fa-star-o";