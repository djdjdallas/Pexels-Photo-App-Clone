var xhttp = new XMLHttpRequest();
var photoDiv ="";
var userAvatar = "";
var searchBar = document.querySelector("#search-box");
var textBox = searchBar.value;

xhttp.onreadystatechange = function() {
       
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       var res = JSON.parse( xhttp.responseText);
       var photoDivs = document.getElementById('photo-divs');
      
      var photoData = res.photos.map(function (photo){
        
        return photo;
       
       });
       photoData.forEach(function (img){
        console.log(img)   
        var photoDiv = document.createElement('div');
        photoDiv.classList.add('photo-div');
           photoDiv.innerHTML = `
                                                    <img src=${img.src.large}>
                                                    
           `
           photoDivs.appendChild(photoDiv);
          

        });
     

    }
    
};
xhttp.open("GET", `https://api.pexels.com/v1/search?query=${searchBar}`, true);
xhttp.setRequestHeader('Authorization', '563492ad6f917000010000019fd16de6c38a4e3e87dd07cbb0a1ca98')
xhttp.send();

var textBox = searchBar.value;

