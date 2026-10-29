canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

//background sky
ctx.fillStyle = "skyblue";
ctx.fillRect(0, 0, canvas.width, canvas.height); // background sky

//grass under sadie

ctx.fillStyle = "lightgreen";
ctx.fillRect(0, 600, canvas.width, 200); // grass under Sadie

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

//vertical mouth line
ctx.fillStyle = "black";
ctx.fillRect(380, 290, 5, 15); // vertical mouth line

//horizontal mouth line
ctx.fillStyle = "black";
ctx.fillRect(375, 305, 20, 5); // horizontal mouth line

//paws
ctx.beginPath();
ctx.arc(500,600,30, 0, 2 * Math.PI);
ctx.fillStyle = "rgb(235, 231, 181,200)";
ctx.fill();

ctx.beginPath();
ctx.arc(570,600,30, 0, 2 * Math.PI);
ctx.fillStyle = "rgb(235, 231, 181,200)";
ctx.fill();

ctx.beginPath();
ctx.arc(800,600,30, 0, 2 * Math.PI);
ctx.fillStyle = "rgb(235, 231, 181,200)";
ctx.fill();

ctx.beginPath();
ctx.arc(870,600,30, 0, 2 * Math.PI);
ctx.fillStyle = "rgb(235, 231, 181,200)";
ctx.fill();

//ear
ctx.beginPath();
ctx.arc(510, 200, 40, 0, 2 * Math.PI);
ctx.fillStyle = "rgb(235, 231, 181,200)";
ctx.fill();
ctx.lineWidth = 2;
ctx.strokeStyle = "yellow";
ctx.stroke();

//nose
ctx.beginPath();
ctx.arc(380, 270, 25, 0, 2 * Math.PI);
ctx.fillStyle = "black";
ctx.fill();

//eye
ctx.beginPath();
ctx.arc(450, 240, 10, 0, 2 * Math.PI);
ctx.fillStyle = "black";
ctx.fill();

//eye gleam
ctx.beginPath();
ctx.arc(455, 235, 2, 0, 2 * Math.PI);
ctx.fillStyle = "white";
ctx.fill();


