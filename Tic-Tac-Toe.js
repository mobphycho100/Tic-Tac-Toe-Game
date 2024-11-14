let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let messageContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newBtn = document.querySelector("#new-btn");
let gameContainer = document.querySelector("#game-container");

let turnO = true;

const resetGame = () => {
    turnO = true;
    boxesEnable();
    messageContainer.classList.add("hide");
    gameContainer.classList.remove("hide");
};

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            box.style.color = "blue";
            turnO = false;
        } else {
            box.innerText = "X";
            box.style.color = "red";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const boxesDisabled = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const boxesEnable = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWin = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner} `;
    messageContainer.classList.remove("hide");
    gameContainer.classList.add("hide");
    boxesDisabled();
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log(pos1);
                showWin(pos1);
            }
        }
    }
};

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);