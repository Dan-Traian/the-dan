<template>
  <div id="scene"></div>
</template>

<script>
import { globalMixin } from "../../mixins/GlobalMixin";

export default {
  mixins: [globalMixin],

  components: {},

  directives: {},

  filters: {},

  props: {},

  data() {
    return {
      scene: null,
      pointer: null,
      currentNrOfShapes: 0,
      maxNrOfShapes: 1,
      isResetting: false,
      currentThemeIndex: -1,

      themes: [
        {
          bodyColor: "pink",
          shapeColor: "cyan",
          shape: "triangle",
        },
        {
          bodyColor: "cyan",
          shapeColor: "yellow",
          shape: "circle",
        },
        {
          bodyColor: "yellow",
          shapeColor: "cyan",
          shape: "circle",
        },
        {
          bodyColor: "cyan",
          shapeColor: "orange",
          shape: "circle",
        },
        {
          bodyColor: "orange",
          shapeColor: "pink",
          shape: "circle",
        },
      ],
    };
  },

  created() {
    this.maxNrOfShapes = this.isMobile() ? 1 : 300;
  },

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
      let hoverables = document.querySelectorAll(".hoverable");
      hoverables.forEach(item => {
        item.addEventListener("mouseover", () => {
          this.pointer.classList.add("hovering");
        });
        item.addEventListener("mouseout", () => {
          this.pointer.classList.remove("hovering");
        });
      });
      document.addEventListener("mousemove", event => {
        this.addShape(event);
      });
      document.addEventListener("mousedown", () => {
        this.pointer.classList.add("clicked");
      });
      document.addEventListener("mouseup", () => {
        this.pointer.classList.remove("clicked");
      });
      return true;
    },

    addShape(mouseEvent) {
      if (this.currentNrOfShapes < this.maxNrOfShapes) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("shape");
        newDiv.classList.add(this.themes[this.currentThemeIndex].shape);
        newDiv.classList.add(this.themes[this.currentThemeIndex].shapeColor);
        newDiv.style.left = mouseEvent.clientX + "px";
        newDiv.style.top = mouseEvent.clientY + "px";
        this.scene.appendChild(newDiv);

        this.currentNrOfShapes++;
      } else if (this.currentNrOfShapes === this.maxNrOfShapes && !this.isResetting) {
        this.resetScene();
      }
    },
    updateNextColorTheme() {
      this.scene.classList = "";
      this.currentThemeIndex++;
      if (this.currentThemeIndex === this.themes.length) this.currentThemeIndex = 0;
      this.scene.classList.add("bg-" + this.themes[this.currentThemeIndex].bodyColor);
    },

    resetScene() {
      this.isResetting = true;
      let shapes = this.scene.querySelectorAll(".shape");
      shapes[shapes.length - 1].classList.add("maximised");

      setTimeout(() => {
        this.updateNextColorTheme();
      }, 1010);
      setTimeout(() => {
        this.scene.innerHTML = "";
      }, 2400);
      setTimeout(() => {
        this.currentNrOfShapes = 0;
        this.isResetting = false;
      }, 2400);
    },
  },
};
</script>

<style lang="scss">
:root {
  --boxunit: 20vw;
}
@media screen and (min-width: 1200px) {
  :root {
    --boxunit: 15vw;
  }
}
#scene {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 10;
  .shape {
    position: absolute;
    border-radius: 100%;
    transform: translate(-50%, -50%);
    transition: width 1s ease-in-out, height 1s ease-in-out;

    width: var(--boxunit);
    height: var(--boxunit);
    &.cyan {
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
