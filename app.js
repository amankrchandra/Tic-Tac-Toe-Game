let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#newgame-btn");
let msgBox = document.querySelector(".msg-box");
let msg = document.querySelector("#msg");

let turnO = true; // their will be PlayerO ya PlayerX

const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
    turnO = true;
   enableboxes();
   msgBox.classList.add("hide");
};
// Functions 
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("Button was clicked");
    if (turnO) {
      // PlayerO
      // turnO or turnO === true , both means TRUE .
      box.innerText = "O";
      turnO = false;
    } else {
      // PlayerX
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const disableboxes = () => {
   for (let box of boxes)
    box.disabled = true; 
}

const enableboxes = () => {
    for (let box of boxes){
     box.disabled = false; 
    box.innerText = "";
    }
 }

const showWinner = (Winner) => {
 msg.innerText =`Congratulations - WINNER is ${Winner}`;
 msgBox.classList.remove("hide");
 disableboxes();
}

const checkWinner = () => {
  for (pattern of winPattern) {
   let pos1val= boxes[pattern[0]].innerText;
   let pos2val= boxes[pattern[1]].innerText;
   let pos3val= boxes[pattern[2]].innerText;

   if (pos1val != "" && pos2val != "" && pos3val != "") {
    if ( pos1val === pos2val && pos2val === pos3val) {
        console.log ("Winner" , pos1val);
        showWinner (pos1val);
    }
   }
  }
};


newGameBtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);
