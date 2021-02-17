var images = ["1","2", "3"];
var imageArray = document.getElementById(arrayImages);

function createImage()  {   

    for(var i = 0;  i < images.length; i++){
        var imgs = document.createElement('img');
        imgs.src = images[i];
        imageArray.appendChild(img);
    }
    
}
setInterval(createImage, 20);