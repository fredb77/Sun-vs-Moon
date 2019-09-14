
var bild = document.getElementById("bild");
var x = true;

// när man klickar på bilden så ändras src i img taggen så den motssatta bilden visas
bild.addEventListener('click', function(){
    
    if(x === true) {
        bild.setAttribute("src", "img/moon.jpg");
        x = false;
    }else {
        bild.setAttribute("src", "img/sun.jpg");
        x = true;
    }
});