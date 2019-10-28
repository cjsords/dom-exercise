//clicking on div with corresponding id will run the changeColor() function that changes the color
// document.getElementById("change").onclick = changeColor;
// function changeColor() {
//   document.getElementById("change").style.backgroundColor = "blue";
// }

let square = document.querySelector("#change");
square.addEventListener("click", changeColor);
function changeColor() {
  square.classList.toggle("blue");
}

// //make paragraph dissapear
// document.getElementById("go").onclick = makeInvisible;
// function makeInvisible() {
//   document.getElementById("go").style.visibility = "hidden";
// }

let dissapear = document.querySelector("#go");
dissapear.addEventListener("click", hideElement);
function hideElement() {
  dissapear.classList.toggle("hidden");
}

// document.getElementById("enter").onmouseenter = changeText;
// function changeText() {
//   document.getElementById("enter").innerHTML = "Hi";
// }

let hiMessage = document.querySelector("#enter");
hiMessage.addEventListener("mouseenter", showHi);
function showHi() {
  hiMessage.innerHTML = "Hi";
}

let byeMessage = document.querySelector("#enter");
hiMessage.addEventListener("mouseleave", showBye);
function showBye() {
  byeMessage.innerHTML = "Bye";
}

// document.getElementById("enter").onmouseleave = changeTextBack;
// function changeTextBack() {
//   document.getElementById("enter").innerHTML = "Bye";
// }

//https://www.youtube.com/watch?v=qvypCd2Vl4s
document.getElementById("clock").onload = showTime();
function showTime() {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let time = `${h}:${m}:${s}`;
  document.getElementById("clock").innerHTML = time;
  setTimeout(showTime, 1000);
}
