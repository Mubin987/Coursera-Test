//console.log(document instanceof HTMLDocument)
//console.log(document.getElementById("title"))
function welcome(){
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