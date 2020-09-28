document.querySelector("#demo").addEventListener("click",function(){
    let global = 5;
    function demo(){
        let local = 7;
        alert(global)
    }
    demo();
    alert(local);

})