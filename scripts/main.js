const SCENE = document.getElementById("scene");
const POINTER = document.getElementById("pointer");
let nrOfCurrentCircles = 0;
let maxNrOfCirclesAllowed = isMobile() ? 1 : 300;
let isResetting = false;

const colorsVariations = {
  pink: "cyan",
  cyan: "yellow",
  yellow: "pink",
};
let currentThemeIndex = "";

(function () {
  updateNextColorTheme();
  setTimeout(setupPointerEvents(), 400);
})();

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
  if (nrOfCurrentCircles < maxNrOfCirclesAllowed) {
    var newDiv = document.createElement("div");
    newDiv.classList.add("circle");
    newDiv.classList.add(colorsVariations[currentThemeIndex]);
    newDiv.style.left = mouseEvent.clientX + "px";
    newDiv.style.top = mouseEvent.clientY + "px";

    // add the newly created element and its content into the DOM
    var currentDiv = document.getElementById("div1");
    SCENE.appendChild(newDiv);
    nrOfCurrentCircles++;
  } else if (nrOfCurrentCircles === maxNrOfCirclesAllowed && !isResetting) {
    resetScene();
  }
}

function resetScene() {
  isResetting = true;
  console.log("need to clean");
  let circles = SCENE.querySelectorAll(".circle");
  circles[circles.length - 1].classList.add("maximised");

  // setting new background color;
  setTimeout(() => {
    updateNextColorTheme();
  }, 1010);
  // clearing all circles
  setTimeout(() => {
    SCENE.innerHTML = "";
  }, 2400);
  // resetting and allowing drawing
  setTimeout(() => {
    nrOfCurrentCircles = 0;
    isResetting = false;
  }, 2400);
}

function updateNextColorTheme() {
  SCENE.classList = "";
  currentThemeIndex = currentThemeIndex === "" ? "pink" : colorsVariations[currentThemeIndex];
  SCENE.classList.add("bg-" + currentThemeIndex);
  console.log("updated scene bg to color : " + currentThemeIndex);
}

function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
