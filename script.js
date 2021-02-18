function firstPicture() {
    document.getElementById("rotator").style.backgroundImage = "url('images/background.jpg')";
  
    setTimeout(function() {
      secondPicture();
    }, 10000);
  }
  
  function secondPicture() {
    document.getElementById("rotator").style.backgroundImage = "url('images/profile.jpg')";
  
    setTimeout(function() {
      firstPicture();
    }, 10000);
  }
  
  firstPicture();