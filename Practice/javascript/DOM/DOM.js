//console.log(document instanceof HTMLDocument)
//console.log(document.getElementById("title"))

document.addEventListener("DOMContentLoaded",
function(event){
function welcome(event){
    console.log(event);
    this.textContent="Confirmed";
    console.log("Welcome "+document.getElementById("name").value);
    var name1 = document.querySelector("#name").value;
    var msg = "<h2>Welcome " + name1 + "<h2>";
    console.log(msg);
    document.querySelector("#below").innerHTML=msg;
    if(name1==="MUBIN"){
        name1=name1+"'s SITE";
        document.querySelector("#title").textContent=name1;
    }
}

//  document.querySelector("button").addEventListener("click",welcome);
 document.querySelector("button").onclick=welcome;
 document.querySelector("body").addEventListener("mousemove",
 function(event){
    if(event.shiftKey===true){
        console.log("x: ",event.clientX);
        console.log("y: ",event.clientY);
    }
 }
 );
}
);