document.querySelector("#demo").addEventListener("click",function(){
    while(true){
        let houses = ["Gosden","Haygate","Park",
            "Hazelveare","School","Summerfield","Sutton"];
        let choice = parseInt(prompt("Pick an option"));
        if(choice==1)
            alert(houses.splice(0,3));
        if (choice==2)
            alert(houses.splice(3,7));
        if (choice==3)
            houses.push(prompt("Enter new house?"));
        if (choice==4)
            alert(houses);
    }
})