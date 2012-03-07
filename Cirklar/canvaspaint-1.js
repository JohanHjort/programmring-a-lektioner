var draw = startCanvas("maincanvas");

var bredd = 5;

function paint(evt) {
	// Must get position relative to the canvas...
	// Ugly and non X-browser
    draw.circle(evt.pageX - draw.canvasX(), evt.pageY - draw.canvasY(), bredd);
}

draw.setCurColor("teal").strokeRect(100, 50, 600, 350).setCurColor("white");
//Osynlig till en början

// Överkurs: clip() gör att inget hamnar utanför rutan
draw.raw().beginPath();
draw.raw().rect(100, 50, 600, 350);
draw.raw().clip();
// clip() är smart att använda när man vill ha vissa delar av ytan intakt

// Börja rita
//TODO: Use lib events instead of DOM 0

draw.canvas().onmousedown = function () {
    // draw.canvas().onmousemove = paint_within_area;
    draw.canvas().onmousemove = paint; // OK med clip
};

// Sluta rita
draw.canvas().onmouseup = function () {
    draw.canvas().onmousemove = null;
};

// Välja färg, bryter mot DRY
document.getElementById("black").onclick = function () {
    draw.setCurColor("black");
};

document.getElementById("white").onclick = function () {
    draw.setCurColor("white");
};

document.getElementById("green").onclick = function () {
    draw.setCurColor("green");
};

document.getElementById("yellow").onclick = function () {
    draw.setCurColor("yellow");
};

document.getElementById("red").onclick = function () {
    draw.setCurColor("red");
};

document.getElementById("blue").onclick = function () {
    draw.setCurColor("blue");
};

document.getElementById("bred").onclick = function () {
    bredd = 10;
};

document.getElementById("tunn").onclick = function () {
    bredd = 5;
};

