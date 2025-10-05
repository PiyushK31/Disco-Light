var light = document.getElementById("light");
var btn = document.getElementById("btn");

var colors = ["red", "blue", "green", "yellow", "orange", "pink"];
var i = 0;
var forward = true;

btn.onclick = function(){

    light.style.backgroundColor = colors[i];

    if(forward == true){
        i = i + 1;
        if(i == colors.length - 1){
            forward = false;
        }
    }
    else{
        i = i - 1;
        if(i == 0){
            forward = true;
        }
    }
}