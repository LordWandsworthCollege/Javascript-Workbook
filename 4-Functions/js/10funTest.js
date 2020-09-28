document.querySelector("#demo").addEventListener("click",function(){
    alert("DEmo")
    let key = "akinfenwa";
    let num = Math.floor(Math.random()*key.length);
    let first = prompt("Give me the "+(num+1)+" in the key");

    if (key.charAt(num)==first){
        alert("Pass friend");
    }else{
        alert("Begone scallywag");
    }

})