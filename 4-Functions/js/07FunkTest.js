document.querySelector("#demo").addEventListener("click",function(){
    let numA = parseInt(prompt("Enter first number"));
    let numB = parseInt(prompt("Enter second number"));
    let sym = prompt("Multiply or add ? ");
    if (sym='+'){
        alert(add(numA,numB));
    }else if (sym='*'){
        alert(mult(numA,numB));
    }else{
        alert("Sorry, I don't understand you ");
    }
    function add(x,y){
        return x+y;
    }
    function mult(x,y){
        return x*y
    }

})