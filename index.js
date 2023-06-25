const canvas = document.querySelector("#myCanvas");
// const width = (canvas.width = window.innerWidth);
// const height = (canvas.height = window.innerHeight);
const ctx = canvas.getContext("2d");
ctx.fillStyle = "rgb(220,20,60)";
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

const rectWidth = 10;
const rectHeight = 10;
console.log(canvasHeight);
let rectX = (canvasWidth - rectWidth) / 2;
let rectY = (canvasHeight - rectHeight) / 2;

ctx.fillRect(rectX, rectY, rectWidth, rectHeight);

$(document).on("keydown",function(event)
{
    let value = event.key;
    ctx.clearRect(rectX, rectY, rectWidth, rectHeight);
    switch(value)
    {
        case "ArrowUp":
            if(rectY>0 ){
                rectY -= 10;break;
            }
        case "ArrowDown":
            if(rectY<140){
                rectY += 10;break;
            }
        case "ArrowLeft":
            if(rectX>5){
                rectX -= 10;break;
            }
            
        case "ArrowRight":
            if(rectX<295){
                rectX += 10;break; 
            }
            
               
        // default:
        //     console.log("Invalid Input")
    }
    // console.log(value);
    console.log("x: "+rectX+" y: "+rectY);
    ctx.fillRect(rectX, rectY, rectWidth, rectHeight);
})
