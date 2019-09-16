console.clear();
for (let i = 0; i < 9; i++) {
  document.getElementById('game').innerHTML += "<button class='block'></button>";
}
var turn = document.getElementById("turn")
const gamePlace = document.querySelector("#game");
let btn = document.getElementById("btn");
btn.innerHTML = "PLAY AGAIN";
btn.style.fontSize = "45px";
let initialStep = 0;
//функція яка перевіряє ел, якщо той що треба і він перевіряє value/ і міняє initialPlayer

function step(event) {
  let target = event.target;
  if (target.textContent) {
    warning(target);
    yourturn();
    setColor();
  }
  handleStep(target);

}

function handleStep(target) {
  if (target.tagName.toLowerCase() === 'button' && !target.textContent) { //перевірка чи є клік і чи є textContent
    if (initialStep % 2 === 0) {
      target.textContent = 'x';
      turn.innerText = "O turn Now";
      turn.style.fontSize = "50px";
      //turn.style.backgroundColor = "white";
    } else {
      target.textContent = 'o';
      turn.innerText = "X turn Now";
      turn.style.fontSize = "50px";
      //turn.style.backgroundColor = "white";
    }
    initialStep++;

  }
  checkWinner();
}

function warning(target) {
  target.classList.add('warning');
  setTimeout(function() {
    target.classList.remove('warning');
  }, 1000);
}

function checkWinner() {
  let buttons = [...gamePlace.children];
  
  buttons.forEach((item, index, array) => {
    if (array[0].textContent === 'x' && array[1].textContent === 'x' && array[2].textContent === 'x' || array[0].textContent === 'o' && array[1].textContent === 'o' && array[2].textContent === 'o')
      setColor(array[0], array[1], array[2]);

    if (array[0].textContent === 'x' && array[3].textContent === 'x' && array[6].textContent === 'x' || array[0].textContent === 'o' && array[3].textContent === 'o' && array[6].textContent === 'o')
      setColor(array[0], array[3], array[6]);

    if (array[0].textContent === 'x' && array[4].textContent === 'x' && array[8].textContent === 'x' || array[0].textContent === 'o' && array[4].textContent === 'o' && array[8].textContent === 'o')
      setColor(array[0], array[4], array[8]);

    if (array[6].textContent === 'x' && array[7].textContent === 'x' && array[8].textContent === 'x' || array[6].textContent === 'o' && array[7].textContent === 'o' && array[8].textContent === 'o')
      setColor(array[6], array[7], array[8]);

    if (array[2].textContent === 'x' && array[5].textContent === 'x' && array[8].textContent === 'x' || array[2].textContent === 'o' && array[5].textContent === 'o' && array[8].textContent === 'o')
      setColor(array[2], array[5], array[8]);

    if (array[3].textContent === 'x' && array[4].textContent === 'x' && array[5].textContent === 'x' || array[3].textContent === 'o' && array[4].textContent === 'o' && array[5].textContent === 'o')
      setColor(array[3], array[4], array[5]);

    if (array[1].textContent === 'x' && array[4].textContent === 'x' && array[7].textContent === 'x' || array[1].textContent === 'o' && array[4].textContent === 'o' && array[7].textContent === 'o')
      setColor(array[1], array[4], array[7]);

    if (array[2].textContent === 'x' && array[4].textContent === 'x' && array[6].textContent === 'x' || array[2].textContent === 'o' && array[4].textContent === 'o' && array[6].textContent === 'o')
      setColor(array[2], array[4], array[6]);

  })
  }
  

  function setColor(b1, b2, b3) {
    b1.classList.add("win"); //column
    b2.classList.add("win");
    b3.classList.add("win");
    turn.innerHTML = b1.innerHTML + " You Win!";

    turn.style.fontSize = "50px";
    turn.style.backgroundColor = "lightblue";
  }


btn.addEventListener('click', function () {
        let buttons = [...gamePlace.children];
    buttons.forEach(function (item, index, array) {
        array[index].textContent = '';
        array[index].classList.remove('win');
    })
})


  gamePlace.addEventListener('click', step);
