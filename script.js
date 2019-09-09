
var sun = document.getElementById("sun");
var moon = document.getElementById("moon");

// när man klickar på bilden så ändras css så den motssatta bilden visas
sun.addEventListener('click', function(){
    sun.style.display = 'none';
    moon.style.display = 'block';
});

moon.addEventListener('click', function(){
    sun.style.display = 'block';
    moon.style.display = 'none';
});