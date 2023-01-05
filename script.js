function clicked(){
    let box= document.getElementsByClassName("box");
    for(let i = 1;i< box.length;i+=2){
        box[i].style.backgroundColor = "lime";
        box[i].style.color = "white";
    }
    let box1 = document.getElementById("box1");
    box1.style.backgroundColor = "blue";
    box1.style.color = "white";
    let box9 = document.getElementById("box9");
    box9.style.backgroundColor = "green";
    box9.style.color = "white";
    let box17 = document.getElementById("box17");
    box17.style.backgroundColor = "palevioletred";
    box17.style.color = "white";
}