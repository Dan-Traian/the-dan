<template>
  <div id="app" class="m-0 p-0 overflow-x-hidden flex">
    <div id="pointer" class="hidden lg:block"></div>

    <div id="darkModeSwitch" class="flex items-center justify-center">
      <ion-icon name="moon" class="text:2xl lg:text-4xl p-2" @click="switchDarkMode"></ion-icon>
    </div>

    <img :src="require(`@/assets/img/logo.svg`)" id="circleLogo" alt="" @click="scrollToTop" />

    <scene></scene>

    <div class="content w-full md:w-4/5 lg:max-w-7xl xl:max-w-10xl px-10 lg:px-0 mx-auto">
      <hero></hero>

      <div class="spacer w-full py-10 md:py-20 mac:py-64"></div>

      <what-now class="hidden lg:block"></what-now>

      <div class="spacer w-full py-10 md:py-20 mac:py-64"></div>

      <background class="hidden lg:block"></background>

      <div class="spacer w-full py-10 md:py-20"></div>

      <contact></contact>
    </div>
  </div>
</template>

<script>
import Scene from "./components/Scene";
import Hero from "./components/Hero";
import WhatNow from "./components/WhatNow";
import Background from "./components/Background";
import Contact from "./components/Contact";

export default {
  name: "app",

  components: {
    scene: Scene,
    hero: Hero,
    // eslint-disable-next-line vue/no-unused-components
    whatNow: WhatNow,
    // eslint-disable-next-line vue/no-unused-components
    background: Background,
    contact: Contact,
  },
  computed: {},
  data() {
    return {};
  },
  created() {},
  mounted() {
    this.setupScrollLogo();
  },
  methods: {
    setupScrollLogo() {
      document.addEventListener("scroll", () => {
        let getScrollDistance = window.pageYOffset / 20;
        console.log(getScrollDistance, "rotate(" + getScrollDistance + "deg)");
        document.getElementById("circleLogo").style.transform = "rotate(" + getScrollDistance + "deg)";
        console.log(document.getElementById("circleLogo"));
      });
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    switchDarkMode() {
      document.querySelector("html").classList.toggle("dark-mode");
    },
  },
};
</script>

<style lang="scss">
#circleLogo {
  transform: rotate(0deg);
  position: fixed;
  top: 20px;
  height: 5rem;
  width: 5rem;
  left: 20px;
  z-index: 1000;
}
#darkModeSwitch {
  filter: invert(100%);
  background-color: #f3f5f9;
  border-radius: 100%;
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
}
</style>
