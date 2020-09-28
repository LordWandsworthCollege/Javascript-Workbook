document.querySelector("#demo").addEventListener("click",function(){
    let dogs = parseInt(prompt("How many hot dogs would you like ?"));
    alert(msg(price(dogs)));
    function price(num){
        return num*2.95;
    }
    function msg(prc){
        return "That'll be "+prc+" ketchup or mustard ?";
    }

})