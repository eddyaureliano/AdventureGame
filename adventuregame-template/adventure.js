var background = {};
var title = document.getElementById("title").innerHTML;
var txt = title.replace("Plaats hier de titel van het level","UNEXPLORED");
document.getElementById("title").innerHTML = txt;

var description = document.getElementById("description").innerHTML;
var txt = description.replace("Plaats hier het verhaal van het level","You wake up in a jungle with no idea of how you got there.");
document.getElementById("description").innerHTML = txt;



document.getElementById("inventoryItem").style.display = "none";