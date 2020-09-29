document.querySelector("#demo").addEventListener("click",function(){
    const a = 10;
    const b = 5;
    if(a>b){
        alert("a is greater ( old skool)");
    }else{
        alert("a is not greater ( old skool)")
    }
    alert(a>b ? "a is greater" : "A is not Greater");
    alert(a>=10 ? "2 b's greater or equal to a":"b is smaller");
    alert(b<a ? "b is less": "b is not less");
    alert(a!=10 ? "a is not equal to 10" : "A = 10");

})

