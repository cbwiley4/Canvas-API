canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

//body//
ctx.fillStyle = "rgb(235, 231, 181,200)";
ctx.fillRect(480,250, 400, 200); // x, y, width, height

//head//
ctx.beginPath();
ctx.arc(490, 250, 90, 0, 2 * Math.PI);
ctx.fillStyle = "rgb(235, 231, 181,200)";
ctx.fill();

//snout
ctx.beginPath();
ctx.arc(400,280, 45, 0, 2 * Math.PI);
ctx.fillStyle = "rgb(235, 231, 181,200)";
ctx.fill();

//hip circle
ctx.beginPath();
ctx.arc(845,355, 110, 0, 2 * Math.PI);
ctx.fillStyle = "rgb(235, 231, 181,200)";
ctx.fill();

//front legs
ctx.fillStyle = "rgb(235, 231, 181,200)";
ctx.fillRect(480,450, 50, 150); // front leg 1
ctx.fillRect(550,450, 50, 150); // front leg 2

//back legs
ctx.fillStyle = "rgb(235, 231, 181,200)";
ctx.fillRect(780,450, 50, 150); // back leg 1
ctx.fillRect(850,450, 50, 150); // back leg 2

//tail
ctx.fillStyle = "rgb(235, 231, 181,200)";
ctx.fillRect(930,300, 50, 230); 
