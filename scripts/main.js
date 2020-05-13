window.onload = function () {
  init();
};
const SCENE = document.getElementById("scene");
const POINTER = document.getElementById("pointer");
let nrOfCurrentCircles = 0;
function init() {
  setTimeout(setupPointerEvents(), 400);
}

function setupPointerEvents() {
  document.addEventListener("mousemove", (event) => {
    POINTER.style.left = event.clientX + "px";
    POINTER.style.top = event.clientY + "px";
    addCircle(event);
  });
  document.addEventListener("mousedown", (event) => {
    POINTER.classList.add("clicked");
  });
  document.addEventListener("mouseup", (even) => {
    POINTER.classList.remove("clicked");
  });
}

function addCircle(mouseEvent) {
  if (nrOfCurrentCircles > 300) resetScene();
  else {
    var newDiv = document.createElement("div");
    newDiv.classList.add("circle");
    newDiv.style.left = mouseEvent.clientX + "px";
    newDiv.style.top = mouseEvent.clientY + "px";

    // add the newly created element and its content into the DOM
    var currentDiv = document.getElementById("div1");
    SCENE.appendChild(newDiv);
    nrOfCurrentCircles++;
  }
}

function resetScene() {
  console.log("need to clean");
  let circles = SCENE.querySelectorAll(".circle");
  circles[circles.length - 1].classList.add("maximised");
  setTimeout(() => {
    SCENE.innerHTML = "";
  }, 1200);
  setTimeout(() => {
    nrOfCurrentCircles = 0;
  }, 2400);
}
