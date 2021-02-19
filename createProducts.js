function createProduct(id, imageURL, h3, h4, stars, para){

    let imgContainer = document.createElement('img');
    let h3Container = document.createElement('h3');
    let h4Container = document.createElement('h4');
    let divContainer = document.createElement('div');
    let paraContainer = document.createElement('P');
    

    imgContainer.src = imageURL;
    h3Container.textContent = h3;
    h4Container.textContent = h4;
    divContainer.className = "rating";
    paraContainer.textContent = para;
    

    document.getElementById(id).appendChild(imgContainer);
    document.getElementById(id).appendChild(h3Container);
    document.getElementById(id).appendChild(h4Container);
    document.getElementById(id).appendChild(divContainer);
    document.getElementById(id).appendChild(paraContainer);
    
    
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

// featured products

var imgFeatured1 = "images/jacket.jpg";
var imgFeatured2 = "images/tent.jpg";
var imgFeatured3 = "images/helmet.jpg";
var imgFeatured4 = "images/backpack.jpg";

var h4Featured1 = "Stormline Stretch Rain Shell Jacket Dam black";
var h4Featured2 = "Nammatj 2 red";
var h4Featured3 = "Vapor steel grey";
var h4Featured4 = "Bora AR 63 Backpack Herr titanium";

createProduct("feat1", imgFeatured1, "Black Diamond", h4Featured1, 5, "1 499 kr");
createProduct("feat2", imgFeatured2, "Hilleberg", h4Featured2, 5, "9 899 kr");
createProduct("feat3", imgFeatured3, "Black Diamond", h4Featured3, 4, "1 299 kr");
createProduct("feat4", imgFeatured4, "Arc'teryx", h4Featured4, 5, "3 495 kr");


// latest products

var imgLat1 = "images/msr-pocketrocket.jpg";
var imgLat2 = "images/msr-pocketrocket.jpg";
var imgLat3 = "images/hagloefs-sleepingbag.jpg";
var imgLat4 = "images/thermos-0,5l.jpg";
var imgLat5 = "images/therm-a-rest.jpg";
var imgLat6 = "images/hilleberg-kaitum-2.jpg";
var imgLat7 = "images/black-diamond-viper-adze.jpg";
var imgLat8 = "images/black-diamond-viper-hammer.jpg";

var h4Lat1 = "PocketRocket 2";
var h4Lat2 = "PocketRocket 2";
var h4Lat3 = "L.I.M Down +1 true black";
var h4Lat4 = "Light & Compact Thermos 0,5l brushed steel";
var h4Lat5 = "RidgeRest Classic Regular charcoal";
var h4Lat6 = "Kaitum 2 red";
var h4Lat7 = "Viper Adze";
var h4Lat8 = "Viper Hammer";

createProduct("lat1", imgLat1, "MSR", h4Lat1, 4, "499 kr");
createProduct("lat2", imgLat2, "MSR", h4Lat2, 4, "499 kr");
createProduct("lat3", imgLat3, "Haglöfs", h4Lat3, 4, "3 995 kr");
createProduct("lat4", imgLat4, "Thermos", h4Lat4, 5, "345 kr");
createProduct("lat5", imgLat5, "Thermarest", h4Lat5, 5, "345 kr");
createProduct("lat6", imgLat6, "Hilleberg", h4Lat6, 4, "11 395 kr");
createProduct("lat7", imgLat7, "Black Diamond", h4Lat7, 4, "2 695 kr");
createProduct("lat8", imgLat8, "Black Diamond", h4Lat8, 4, "2 695 kr");
