const canvas = <HTMLCanvasElement> document.getElementById("canvas");
const ctx  = <CanvasRenderingContext2D> canvas.getContext("2d");

let png = new Image();
png.onload = drawScene;
png.src = 'pictures/girl.jpg';

const pixelSize = 1;

function drawScene () : void {
  canvas.width = png.width;
  canvas.height = png.height;

  ctx.drawImage(png, 0, 0 , png.width, png.height);

  var imgData=ctx.getImageData(0,0,png.width,png.height);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  

  for (let y= 0; y < png.height; y+= pixelSize) {
   for (let x = 0; x < png.width; x+= pixelSize) {
       
     let pos   = (x + y * png.width) * 4;
     let red   = imgData.data[pos];
     let green = imgData.data[pos + 1];
     let blue  = imgData.data[pos + 2];
     ctx.fillStyle = `rgb(${red},${green},${blue})`;
     ctx.fillRect(x, y, pixelSize, pixelSize);
   }
  }
}
