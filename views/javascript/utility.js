var electron = require("electron");
var remote = electron.remote;

let Win = remote.getCurrentWindow();

function getBtn(obj){
    return document.getElementById(obj);
}

getBtn("close").onclick=function(){
   Win.close();
}

getBtn("maximize").onclick=function(){
    Win.maximize();

}

getBtn("minimize").onclick=function(){
    Win.minimize();
}
