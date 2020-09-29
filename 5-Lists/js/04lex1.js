document.querySelector("#demo").addEventListener("click",function(){
    let price = 2.95;
    let orders = [];
    while(price==2.95){
        let quantity = parseInt(prompt("How many hot dogs would you like ? "));
        let total = price*quantity;
        alert("That'll be "+total.toFixed(2)+" please, do you want mustard ?");
        orders.push(quantity);
        alert(orders);
    }

})