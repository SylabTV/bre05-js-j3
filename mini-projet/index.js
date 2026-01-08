/*
Codes couleurs

jaune: #efec4f;
orange: #eca45c;
rouge: #e85b69;
violet: #956caf;
bleu: #427cf5;
vert: #4cee7e;
noir: #020e13;

*/

function grid1() {
  let grids = document.querySelectorAll(".grid");
  let boxes = grids[0].querySelectorAll("div");

  for (let box of boxes) {
    box.style.backgroundColor = "black";
  }
}


function grid2()
{let grids = document.querySelectorAll(".grid");
let grid = grids[1];
let boxes = grid.querySelectorAll("div");
for (i=0; i<9; i++){
    if (i%2==0){
        boxes[i].style.backgroundColor = "#4cee7e";
    }
    if (i%2!=0){
        boxes[i].style.backgroundColor = "#efec4f";
    }
}
}
function grid3()
{let grids = document.querySelectorAll(".grid");
let grid = grids[2];
let boxes = grid.querySelectorAll("div");

boxes[0].style.backgroundColor = "#e85b69";
boxes[1].style.backgroundColor = "#eca45c";
boxes[2].style.backgroundColor = "#efec4f";
boxes[3].style.backgroundColor = "#4cee7e";
boxes[4].style.backgroundColor = "#427cf5";
boxes[5].style.backgroundColor = "#956caf";
for (i=6; i<9; i++){
    boxes[i].style.backgroundColor = "white";
}
}

function grid4()
{let grids = document.querySelectorAll(".grid");
let grid = grids[3];
let boxes = grid.querySelectorAll("div");

for (let box of boxes) {
    box.style.backgroundColor = "black";
}
boxes[4].style.backgroundColor = "green";
}

function grid5()
{let grids = document.querySelectorAll(".grid");
let grid = grids[4];
let boxes = grid.querySelectorAll("div");

for (i=0; i<3; i++){
    boxes[i].style.backgroundColor = "blue";
}
for (i=3; i<6; i++){
    boxes[i].style.backgroundColor = "violet";
}
for (i=6; i<9; i++){
    boxes[i].style.backgroundColor = "orange";
}
boxes[4].style.backgroundColor = "red";
boxes[7].style.backgroundColor = "yellow";
}

function grid6()
{let grids = document.querySelectorAll(".grid");
let grid = grids[5];
let boxes = grid.querySelectorAll("div");

for (let i = 0; i < 3; i++) {
    boxes[i].style.background = "linear-gradient(to bottom, violet, blue)";
}
for (let i = 3; i < 6; i++) {
    boxes[i].style.background = "linear-gradient(to bottom, green, yellow)";
}
for (let i = 6; i < 9; i++) {
    boxes[i].style.background = "linear-gradient(to bottom, orange, red)";
}
}
grid1();
grid2();
grid3();
grid4();
grid5();
grid6();