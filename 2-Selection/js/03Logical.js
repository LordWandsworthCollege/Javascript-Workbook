let legs = parseInt(prompt("How many legs does the creature have ?"));
let tail = prompt("Does it have a tail ?")
if(legs==4 && tail=="yes"){
    alert("It's a Hegehog'");
}else if (legs==2 && tail=="no"){
    alert("It's a human");
}else if (legs==0 && tail=="no"){
    alert("It's a fish");
}else if(legs >100 || tail=="wierd"){
    alert("Run, its an Alien");
}else{
    alert("Call the zoo, it's escaped");
}