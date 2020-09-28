let pic = document.querySelector("img");
let title = document.querySelector("h1");
pic.style.display = 'none';
title.addEventListener("click",function() {
    pic.style.display = 'block';

});