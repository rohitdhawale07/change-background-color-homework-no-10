var button = document.getElementById("btn")
var section = document.querySelector(".container")
var arr = ["red","green","black","purple"];

var idx = 0;
button.addEventListener("click",()=>{
    if(idx === arr.length){
        idx = 0;
    }
    section.style.backgroundColor = arr[idx]
    idx++;
})