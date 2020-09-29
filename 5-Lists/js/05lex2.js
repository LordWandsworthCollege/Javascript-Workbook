document.querySelector("#demo").addEventListener("click",function(){
    let price = 2.95;
    let orders = [];
    let dogs = 25;
    while(dogs>0){
        let quantity = parseInt(prompt("How many hot dogs ? "));
        let total = price*quantity;
        alert("That'll be "+total.toFixed(2)+" please ?");
        orders.push(quantity);
        dogs -= quantity;
        if(dogs<5)
            alert("Low on dogs");
        alert(orders + " - " + dogs);
    }
    alert("That's all folks")

})