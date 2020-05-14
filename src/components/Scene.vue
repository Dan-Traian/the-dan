<template>
  <div id="scene"></div>
</template>

<script>
export default {
  mixins: [],

  components: {},

  directives: {},

  filters: {},

  props: {},

  data() {
    return {
      scene: null,
      pointer: null,
      nrOfCurrentCircles: 0,
      maxNrOfCirclesAllowed: 300,
      isResetting: false,
      colorsVariations: {
        pink: "cyan",
        cyan: "yellow",
        yellow: "cyan2",
        cyan2: "orange",
        orange: "pink",
      },
      currentThemeIndex: "",
    };
  },

  created() {},

  mounted() {
    this.scene = document.getElementById("scene");
    this.pointer = document.getElementById("pointer");

    this.updateNextColorTheme();
    setTimeout(() => {
      this.setupPointerEvents();
    }, 400);
  },

  computed: {},

  watch: {},

  methods: {
    setupPointerEvents() {
      document.addEventListener("mousemove", event => {
        this.pointer.style.left = event.pageX - document.body.scrollLeft + "px";
        this.pointer.style.top = event.pageY - document.body.scrollTop + "px";
        this.addCircle(event);
      });
      document.addEventListener("mousedown", () => {
        this.pointer.classList.add("clicked");
      });
      document.addEventListener("mouseup", () => {
        this.pointer.classList.remove("clicked");
      });
      return true;
    },

    addCircle(mouseEvent) {
      console.log("adding circle", this.nrOfCurrentCircles);
      if (this.nrOfCurrentCircles < this.maxNrOfCirclesAllowed) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("circle");
        newDiv.classList.add(this.colorsVariations[this.currentThemeIndex]);
        newDiv.style.left = mouseEvent.clientX + "px";
        newDiv.style.top = mouseEvent.clientY + "px";
        this.scene.appendChild(newDiv);

        this.nrOfCurrentCircles++;
      } else if (this.nrOfCurrentCircles === this.maxNrOfCirclesAllowed && !this.isResetting) {
        this.resetScene();
      }
    },
    updateNextColorTheme() {
      this.scene.classList = "";
      this.currentThemeIndex = this.currentThemeIndex === "" ? "pink" : this.colorsVariations[this.currentThemeIndex];

      this.scene.classList.add("bg-" + this.currentThemeIndex);
      console.log("updated scene bg to color : " + this.currentThemeIndex);
    },

    resetScene() {
      this.isResetting = true;
      console.log("need to clean");
      let circles = this.scene.querySelectorAll(".circle");
      circles[circles.length - 1].classList.add("maximised");

      // setting new background color;
      setTimeout(() => {
        this.updateNextColorTheme();
      }, 1010);
      // clearing all circles
      setTimeout(() => {
        this.scene.innerHTML = "";
      }, 2400);
      // resetting and allowing drawing
      setTimeout(() => {
        this.nrOfCurrentCircles = 0;
        this.isResetting = false;
      }, 2400);
    },
    isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    },
  },
};
</script>

<style lang="scss">
#scene {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 10;
  .circle {
    position: absolute;
    border-radius: 100%;
    transform: translate(-50%, -50%);
    transition: width 1s ease-in-out, height 1s ease-in-out;

    &.cyan,
    &.cyan2 {
      animation: bgChangeCyan 0.5s ease-in-out forwards;
    }
    &.yellow {
      animation: bgChangeYellow 0.5s ease-in-out forwards;
    }
    &.pink {
      animation: bgChangePink 0.5s ease-in-out forwards;
    }
    &.orange {
      animation: bgChangeOrange 0.5s ease-in-out forwards;
    }

    &.maximised {
      width: 300vw;
      height: 300vw;
    }
  }
}
</style>
