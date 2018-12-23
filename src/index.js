"use strict";
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var png = new Image();
png.onload = drawScene;
png.src = 'pictures/girl.jpg';
var pixelSize = 1;
function drawScene() {
    canvas.width = png.width;
    canvas.height = png.height;
    ctx.drawImage(png, 0, 0, png.width, png.height);
    var imgData = ctx.getImageData(0, 0, png.width, png.height);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var y = 0; y < png.height; y += pixelSize) {
        for (var x = 0; x < png.width; x += pixelSize) {
            var pos = (x + y * png.width) * 4;
            var red = imgData.data[pos];
            var green = imgData.data[pos + 1];
            var blue = imgData.data[pos + 2];
            ctx.fillStyle = "rgb(" + red + "," + green + "," + blue + ")";
            ctx.fillRect(x, y, pixelSize, pixelSize);
        }
    }
}
