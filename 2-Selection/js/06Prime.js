document.querySelector("#demo").addEventListener("click",function(){
    const age = parseInt(prompt("How old are you "))
    if(age%2==1){
        alert("You're odd")
    }else{
        alert("You're even")
    }

    if (age<0){
        alert("Error");
    }else if(age>100){
        alert("Error");
    }else if (age==21){
        alert("Happy 21st");
    }else if(age==22){
        alert("You're a Taylor swift song");
    }
    else{
        alert("Cool");
    }

})

