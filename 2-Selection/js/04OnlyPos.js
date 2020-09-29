document.querySelector("#demo").addEventListener("click",function(){
    const age = parseInt(prompt("How old are you "))
    if (age<0){
        alert("Error");
    }else if(age>100){
        alert("Error");
    }else{
        alert("Cool");
    }

})

