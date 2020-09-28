document.querySelector("#demo").addEventListener("click",function(){
    function add(num){
        return(num+5);
    }
    function multiply(num){
        return(num*4);
    }
    let x = prompt("Enter a number ");
    alert("1 - "+ add(multiply(x)));
    alert("2 - "+ multiply(add(x)));

})