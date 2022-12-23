const music = new Audio("assets/sound-k-117217.mp3");
const turn = new Audio("assets/sqeeeek_stapler-86284.mp3");
const gameOver = new Audio(
  "assets/mixkit-wrong-answer-fail-notification-946.wav"
);
let turn1 = "X";
let gameover = false;
// Function to change the turn
const changeTurn = () => {
  return turn1 === "X" ? "O" : "X";
};

//to check win
const checkWin = () => {
  let boxtext = document.getElementsByClassName("text");
  let wins = [
    [0, 1, 2, 2, 4, 0],
    [3, 4, 5, 2, 14, 0],
    [6, 7, 8, 2, 25, 0],
    [0, 3, 6, -7.5, 15, 90],
    [1, 4, 7, 2.5, 15, 90],
    [2, 5, 8, 12.5, 15, 90],
    [0, 4, 8, 3, 15, 45],
    [2, 4, 6, 2, 15, -45],
  ];
  wins.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxtext[e[0]].innerText + " has Won";

        gameover = true;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "auto";
        music.pause();
        gameOver.play();
        document.querySelector('.line').style.transform = `translate(${e[3]}vw,${e[4]}vw)  rotate(${e[5]}deg)`;
        document.querySelector('.line').style.width = "25vw";
    }
  });
};

//game logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".text");
  element.addEventListener("click", () => {
    music.play();
    if (boxtext.innerText === "") {
      boxtext.innerText = turn1;
      turn1 = changeTurn();
      turn.play();
      checkWin();
      if(!gameover){
      document.getElementsByClassName("info")[0].innerText =
        turn1 + `'s` + " turn";
    }
    }
  });
});


///reset

reset.addEventListener('click', (e) => {
    music.pause();
    let boxtexts = document.querySelectorAll('.text');
    Array.from(boxtexts).forEach(element =>{
element.innerText = "";
    });
     document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0";
        music.pause();
        document.querySelector('.line').style.width = "0vw";
    
    turn1 = "X";
    gameover = false;
        document.getElementsByClassName("info")[0].innerText =
          turn1 + `'s` + " turn";
      
});
