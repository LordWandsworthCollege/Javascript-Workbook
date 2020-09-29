document.querySelector("#demo").addEventListener("click",function(){
    const num = parseInt(prompt("Pick a number from 1-20"));
    if(num<6){
        alert("Too small");
    }else if (num>20){
        alert("That's not between 0 and 20");
    }else{
        alert("Top stuff");
    }
    // Ext: If the number is less than 0, can
    // you display Invalid entry

})

