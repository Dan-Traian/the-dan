<template>
  <div class="w-screen flex ">
    <div class="content-sized min-h-screen bg-dark flex items-center justify-center">
      <div class="box">
        <section id="lineContainer" class="w-full mt-6"></section>
      </div>
      <div class="box">
        <section id="lineContainer2" class="w-full"></section>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
        viewBox="0 0 300 300"
        preserveAspectRatio="none"
        style="width:1200; height:1200; top:0; left:0;"
      >
        <circle
          cx="100"
          cy="100"
          r="57"
          id="loadingCircle"
          fill="none"
          stroke="#fff"
          stroke-width="1"
          stroke-dasharray="0,20000"
          transform="rotate(-90,100,100)"
        />
      </svg>
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
    return {};
  },

  created() {},

  mounted() {
    this.animateCircle();
    this.addLines();
  },

  computed: {},

  watch: {},

  methods: {
    addLines() {
      let parent = document.getElementById("lineContainer");
      for (let i = 1; i < 50; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("line");
        parent.append(newDiv);
      }
      let parent1 = document.getElementById("lineContainer2");
      for (let i = 1; i < 50; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("line");
        parent1.append(newDiv);
      }
    },
    animateCircle() {
      // math trick 2*pi*57 = 358, must be less than 360 degree
      let circle = document.getElementById("loadingCircle");
      let interval = 30;
      let angle = 0;
      let angle_increment = 3;

      window.timer = window.setInterval(
        function() {
          circle.setAttribute("stroke-dasharray", angle + ", 20000");
          if (angle >= 360) {
            window.clearInterval(window.timer);
          }
          angle += angle_increment;
        }.bind(this),
        interval,
      );
    },
  },
};
</script>
<style lang="scss">
<!--body {-->
<!--  background-color: #222;-->
<!--}-->
<!--.box {-->
<!--  overflow: hidden;-->
<!--  transform: rotate(45deg);-->
<!--  transform-origin: center;-->
<!--}-->
<!--#lineContainer,-->
<!--#lineContainer2 {-->
<!--  transform: scale(1.5, 1.5) rotate(-45deg);-->
<!--  transform-origin: center;-->
<!--  width: 150%;-->
<!--  .line {-->
<!--    width: 150%;-->
<!--    height: 1px;-->
<!--    background: #fff;-->
<!--    margin-bottom: 10px;-->
<!--  }-->
<!--}-->
</style>
