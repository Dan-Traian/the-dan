<template>
  <div class="m-0 p-0 overflow-x-hidden flex">
    <div id="pointer" class="hidden lg:block"></div>

    <div id="contactMeButton" class="hidden lg:block">
      <a class="text-email-button" href="#contactSection">Contact me </a>
    </div>

    <img :src="require(`@/assets/img/logo.svg`)" id="circleLogo" alt="" @click="scrollToTop" />

    <div id="logos" class=" flex-col text-base hidden md:flex">
      <a href="https://github.com/Dan-Traian" target="_blank" class="m-3 text-base lg:text-xl hoverable link-reset">
        <ion-icon name="logo-github"></ion-icon>
      </a>
      <a
        href="https://www.linkedin.com/in/dan-traian-roman/"
        target="_blank"
        class="m-3 text-base lg:text-xl hoverable link-reset"
      >
        <ion-icon name="logo-linkedin"></ion-icon>
      </a>
      <a href="mailto:roman.dan.traian@gmail.com" target="_blank" class="m-3 text-base lg:text-xl hoverable link-reset">
        <ion-icon name="mail"></ion-icon>
      </a>
    </div>

    <scene v-if="!isTrafficTheme"></scene>

    <div class="content w-full md:w-4/5 lg:max-w-7xl xl:max-w-10xl px-10 lg:px-0 mx-auto">
      <traffic v-if="isTrafficTheme"></traffic>

      <div class="website" v-else>
        <hero></hero>

        <what-now class="hidden lg:block py-20 lg:py-48"></what-now>

        <background class="hidden lg:block py-20 lg:py-48"></background>

        <competences class="hidden lg:block py-20 lg:py-48"></competences>

        <contact></contact>
      </div>
    </div>
  </div>
</template>

<script>
import Scene from "./components/Scene";
import Hero from "./components/Hero";
import WhatNow from "./components/WhatNow";
import Background from "./components/Background";
import Contact from "./components/Contact";
import Competences from "./components/Competences";
import Traffic from "./components/trafficLab/Traffic";

export default {
  components: {
    scene: Scene,
    hero: Hero,
    whatNow: WhatNow,
    background: Background,
    contact: Contact,
    competences: Competences,
    traffic: Traffic,
  },
  computed: {
    getThemeLink() {
      return this.isTrafficTheme ? "./" : "./?theme=traffic";
    },
  },
  data() {
    return {
      isTrafficTheme: false,
      pointer: null,
    };
  },
  created() {
    this.checkForTheme();
  },
  mounted() {
    this.setupScrollLogo();
    this.pointer = document.getElementById("pointer");
    document.addEventListener("mousemove", event => {
      this.pointer.style.left = event.pageX - document.body.scrollLeft + "px";
      this.pointer.style.top = event.pageY - document.body.scrollTop + "px";
    });
  },
  methods: {
    setupScrollLogo() {
      document.addEventListener("scroll", () => {
        let getScrollDistance = window.pageYOffset / 20;
        document.getElementById("circleLogo").style.transform = "rotate(" + getScrollDistance + "deg)";
      });
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    switchDarkMode() {
      document.querySelector("html").classList.toggle("dark-mode");
    },
    checkForTheme() {
      let urlFull = {};
      location.search
        .substr(1)
        .split("&")
        .forEach(function(item) {
          urlFull[item.split("=")[0]] = item.split("=")[1];
        });

      if (urlFull !== [] && urlFull.theme === "traffic") {
        this.isTrafficTheme = true;
        document.querySelector("html").classList.add("trafficLab");
      }
    },
  },
};
</script>

<style lang="scss">
.content {
  z-index: 50;
}
#circleLogo {
  transform: rotate(0deg);
  position: fixed;
  top: 20px;
  height: 5rem;
  width: 5rem;
  left: 20px;
  z-index: 1000;
}

#logos {
  position: fixed;
  bottom: 20px;
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
#contactMeButton {
  border-radius: 300px;
  padding: 10px 50px;
  font-size: 30px;
  position: fixed;
  font-weight: bold;
  top: 20px;
  right: 20px;
  z-index: 1000;
  border: 1px solid #410807;
}
.website {
  * {
    color: #410807;
  }
}
</style>
