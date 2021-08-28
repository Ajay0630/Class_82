mouseevent = "empty";
var lastx = "200";
var lasty = "200";
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "red";
linew = 4;
canvas.addEventListener("mousedown", mdown);
function mdown(e) {
    mouseevent = "mouseDown";
}
canvas.addEventListener("mouseleave", mleav);
function mleav(e) {
    mouseevent = "mouseLeave";
}
canvas.addEventListener("mouseup", mup);
function mup(e) {
    mouseevent = "mouseUp";
}
canvas.addEventListener("mousemove", move);
function move(e) {
    cx = e.clientx - canvas.offsetLeft;
    cy = e.clienty - canvas.offsetTop;
    if (mouseevent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.linewidth = linew;
        console.log("Last Positions of X and Y");
        console.log("x = " + lastx + "  y = " + lasty);
        ctx.moveTo(lastx, lasty);
        console.log("Current Positions of X and Y");
        console.log("x = " + cx + "  y = " + cy);
        ctx.lineTo(cx, cy);
        ctx.stroke();
        lastx = cx;
        lasty = cy;
    }
}