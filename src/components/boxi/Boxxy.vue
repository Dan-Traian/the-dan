<template>
  <div class="w-screen flex grotesk">
    <div id="pointer" class="hidden lg:block"></div>
    <div class="content-sized flex flex-col items-center justify-center h-screen">
      <div class="scene">
        <div class="cube">
          <div class="cube__face cube__face--front ">front</div>
          <div class="cube__face cube__face--back ">back</div>
          <div class="cube__face cube__face--right ">right</div>
          <div class="cube__face cube__face--left ">left</div>
          <div class="cube__face cube__face--top ">top</div>
          <div class="cube__face cube__face--bottom ">bottom</div>
        </div>
      </div>
    </div>
  </div>
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
      window: {
        pointer: null,
        width: window.innerWidth,
        height: window.height,
      },
      cube: {
        element: null,
        posX: 0,
        posY: 0,
      },
    };
  },

  created() {},

  mounted() {
    this.setPositioning();

    this.pointer = document.getElementById("pointer");
    document.addEventListener("mousemove", event => {
      this.pointer.style.left = event.pageX - document.body.scrollLeft + "px";
      this.pointer.style.top = event.pageY - document.body.scrollTop + "px";
    });

    document.addEventListener("mousemove", event => {
      this.rotateCube(event);
    });
    window.onresize = this.setPositioning;
  },

  computed: {},

  watch: {},

  methods: {
    rotateCube(event) {
      let distanceXToOrigin = event.clientX - this.cube.posX;
      let pixelXRatioToRotate = 90 / (this.window.width / 2);
      let rotateX = distanceXToOrigin * pixelXRatioToRotate;

      let distanceYToOrigin = event.clientY - this.cube.posY;
      let pixelYRatioToRotate = 90 / (this.window.height / 2);
      let rotateY = -1 * distanceYToOrigin * pixelYRatioToRotate;
      this.cube.element.style.transform =
        "translateZ(calc(var(--boxunit) / 2)) rotateX(" +
        rotateY +
        "deg) rotateY(" +
        rotateX +
        "deg)";
    },
    addClass(className) {
      this.cube.element.classList = "cube " + className;
    },
    setPositioning() {
      console.log("resized");
      this.window = {
        width: window.innerWidth,
        height: window.innerHeight,
      };
      this.cube = {
        element: document.querySelector(".cube"),
        posX: window.innerWidth / 2,
        posY: window.innerHeight / 2,
      };
    },
  },
};
</script>
<style>
body {
  cursor: none;
}
:root {
  --boxunit: 300px;
}

.scene {
  width: var(--boxunit);
  height: var(--boxunit);
  perspective: 800px;
}

.cube {
  width: var(--boxunit);
  height: var(--boxunit);
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.1s;
}

.cube__face {
  position: absolute;
  width: var(--boxunit);
  height: var(--boxunit);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2643f7;
  color: #37cfb1;
  font-size: 20px;
  font-weight: bold;
  border: 3px solid #1f2932;
}
.cube__face--front {
  transform: rotateY(0deg) translateZ(calc(var(--boxunit) / 2));
}
.cube__face--right {
  transform: rotateY(90deg) translateZ(calc(var(--boxunit) / 2));
}
.cube__face--back {
  transform: rotateY(180deg) translateZ(calc(var(--boxunit) / 2));
}
.cube__face--left {
  transform: rotateY(-90deg) translateZ(calc(var(--boxunit) / 2));
}
.cube__face--top {
  transform: rotateX(90deg) translateZ(calc(var(--boxunit) / 2));
}
.cube__face--bottom {
  transform: rotateX(-90deg) translateZ(calc(var(--boxunit) / 2));
}
</style>
