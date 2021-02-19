function createReviews(id, para, imgURL, h3, stars){

    let paraContainer = document.createElement('P');
    let divContainer = document.createElement('div');
    let imgComtainer = document.createElement('img');
    let h3Container = document.createElement('h3');

    paraContainer.textContent = para;
    divContainer.className = "rating";
    imgComtainer.src = imgURL;
    h3Container.textContent = h3;

    document.getElementById(id).appendChild(paraContainer);
    document.getElementById(id).appendChild(divContainer);
    document.getElementById(id).appendChild(imgComtainer);
    document.getElementById(id).appendChild(h3Container);

    for(var i = 0; i < 5; i++){
        if(i < stars){
            iContainer = document.createElement('I');
            iContainer.className = star1;
            divContainer.appendChild(iContainer);
        }
        else{
            iContainer = document.createElement('I');
            iContainer.className = star2;
            divContainer.appendChild(iContainer);
        }
    }


}

star1 = "fa fa-star";
star2 = "fa fa-star-o";

var para1 = "";
var para2 = "";
var para3 = "";

var img1 = "images/profile-1.png";
var img2 = "images/profile-2.png";
var img3 = "images/profile-3.png";

var name1 = "";
var name2 = "";
var name3 = "";

createReviews("rev1", para1, img1, name1, 5);
createReviews("rev2", para2, img2, name2, 5);
createReviews("rev3", para3, img3, name3, 4);
