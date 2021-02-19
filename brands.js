function createBrandLogo(id, imgURl) {

    let imgContainer = document.createElement('img');

    imgContainer.src = imgURl;

    document.getElementById(id).appendChild(imgContainer);

}

var img1 = "images/msr.jpg";
var img2 = "images/hagloefs.jpg";
var img3 = "images/hilleberg.jpg";
var img4 = "images/thermos.jpg";
var img5 = "images/blackdiamond.jpg";

createBrandLogo("brand-1", img1);
createBrandLogo("brand-2", img2);
createBrandLogo("brand-3", img3);
createBrandLogo("brand-4", img4);
createBrandLogo("brand-5", img5);