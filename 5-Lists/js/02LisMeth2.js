document.querySelector("#demo").addEventListener("click",function(){
    let teams = ["AFC","Sunderland","Ipswich","Portsmouth"];
    delete teams[1];
    console.log("delete teams[1];  " + teams);
    teams[1] = "Burton";
    let topTwo = teams.splice(0,2);
    console.log(teams + " teams.splice(0,2); " +topTwo);
    teams = teams.concat(topTwo);
    console.log("teams.concat(topTwo);" + teams)
    /* Task Define each of these terms above in exactly 9 words
    - Delete
    - Splice
    - Concat
     */

})