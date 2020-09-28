document.querySelector("#demo").addEventListener("click",function(){
    alert(Math.random()*10);
    for(let x = 0;x<5;x++){
        alert(Math.floor(Math.random()*10));
    }

})