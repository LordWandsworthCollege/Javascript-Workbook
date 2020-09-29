document.querySelector("#demo").addEventListener("click",function(){
    console.log("Loaded");
    const age = parseInt(prompt("ID please"));
    let day = prompt("What day is it ( Mon, Wed, Fri, Sat)");
    if((age>=18) && (day==="Mon")){
        alert("Please come in");
    } else if(age>=18 && day==="Wed"){
        alert("Please come in");
    } else if (age>=19 && day === "Fri"){
        alert("Please come in");
    }else if (age>=21 && day === "Sat"){
        alert("Please come in");
    }else{
        alert("Go away you horrible scallywag");
    }
})

