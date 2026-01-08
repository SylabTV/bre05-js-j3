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

boxes[0].style.backgroundColor = "#4cee7e";
boxes[1].style.backgroundColor = "#efec4f";
boxes[2].style.backgroundColor = "#4cee7e";
boxes[3].style.backgroundColor = "#efec4f";
boxes[4].style.backgroundColor = "#4cee7e";
boxes[5].style.backgroundColor = "#efec4f";
boxes[6].style.backgroundColor = "#4cee7e";
boxes[7].style.backgroundColor = "#efec4f";
boxes[8].style.backgroundColor = "#4cee7e";

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

}

function grid4()
{let grids = document.querySelectorAll(".grid");
let grid = grids[3];
let boxes = grid.querySelectorAll("div");

boxes[0].style.backgroundColor = "black";
boxes[1].style.backgroundColor = "#000000ff";
boxes[2].style.backgroundColor = "#000000ff";
boxes[3].style.backgroundColor = "#000000ff";
boxes[4].style.backgroundColor = "#00ff37ff";
boxes[5].style.backgroundColor = "#000000ff";
boxes[6].style.backgroundColor = "#000000ff";
boxes[7].style.backgroundColor = "#000000ff";
boxes[8].style.backgroundColor = "#000000ff";
}

function grid5()
{let grids = document.querySelectorAll(".grid");
let grid = grids[4];
let boxes = grid.querySelectorAll("div");

boxes[0].style.backgroundColor = "blue";
boxes[1].style.backgroundColor = "blue";
boxes[2].style.backgroundColor = "blue";
boxes[3].style.backgroundColor = "violet";
boxes[4].style.backgroundColor = "red";
boxes[5].style.backgroundColor = "violet";
boxes[6].style.backgroundColor = "orange";
boxes[7].style.backgroundColor = "yellow";
boxes[8].style.backgroundColor = "orange";

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