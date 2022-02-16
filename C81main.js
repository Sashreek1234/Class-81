var v1 = document.getElementById("Canvas");
var v2 = v1.getContext("2d");
var color = "green";

v2.beginPath();
v2.strokeStyle = color;
v2.lineWidth = 5;
v2.arc(400, 300, 50, 0, 2 * Math.PI);
v2.stroke();
v1.addEventListener("mousedown", Canvas);
function Canvas(m) {
color =document.getElementById("TI1").value;

    var x = m.clientX - v1.offsetLeft;
    var y = m.clientY - v1.offsetTop;
    Circle(x, y);
}
function Circle(x, y) {
    v2.beginPath();
    v2.strokeStyle = color;
    v2.lineWidth = 5;
    v2.arc(x, y, 50, 0, 2 * Math.PI);
    v2.stroke();
}
function Button(){
    v2.clearRect(0,0,v1.width,v1.height);
}


