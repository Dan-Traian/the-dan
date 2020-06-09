<template>
  <div class="w-screen m-0 p-0 overflow-x-hidden flex grotesk">
    <div id="pointer" class="hidden lg:block"></div>
    <a href="#contactSection" id="logoContainer">
      <img :src="require(`@/assets/img/hireme_circle.svg`)" id="circleLogo" alt="" />

      <img :src="require(`@/assets/img/hireme.svg`)" id="hand" alt="" />
    </a>

    <div id="logos" class=" flex-col text-base hidden md:flex">
      <a
        :href="url"
        :key="icon"
        v-for="(url, icon) in icons"
        target="_blank"
        class="m-3 text-base lg:text-xl hoverable link-reset"
      >
        <ion-icon :name="icon"></ion-icon>
      </a>
    </div>

    <scene></scene>

    <div class="content-sized z-50">
      <hero></hero>

      <what-now class="hidden lg:block py-20 lg:py-48"></what-now>

      <background class="hidden lg:block py-20 lg:py-48"></background>

      <competences class="hidden lg:block py-20 lg:py-48"></competences>

      <showcase class="hidden lg:block py-20 lg:py-48"></showcase>

      <contact></contact>
    </div>
  </div>
</template>

<script>
import Scene from "./Scene";
import Hero from "./Hero";
import WhatNow from "./WhatNow";
import Background from "./Background";
import Contact from "./Contact";
import Competences from "./Competences";
import Showcase from "./Showcase";

export default {
  components: {
    scene: Scene,
    hero: Hero,
    whatNow: WhatNow,
    background: Background,
    contact: Contact,
    competences: Competences,
    showcase: Showcase,
  },
  computed: {},
  data() {
    return {
      pointer: null,
      icons: {
        "logo-instagram": "https://www.instagram.com/daysofcss/",
        "logo-github": "https://github.com/Dan-Traian",
        "logo-linkedin": "https://www.linkedin.com/in/dan-traian-roman/",
        "mail": "mailto:roman.dan.traian@gmail.com",
      },
    };
  },
  created() {
    this.tempCheckForTraffic();
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
        document.getElementById("circleLogo").style.transform =
          "rotate(" + getScrollDistance + "deg)";
      });
    },

    tempCheckForTraffic() {
      let queryDict = {};
      location.search
        .substr(1)
        .split("&")
        .forEach(function(item) {
          queryDict[item.split("=")[0]] = item.split("=")[1];
        });
      console.log(queryDict);
      if (queryDict !== {} && queryDict.theme === "traffic") {
        console.log("need to redirect", this);
        this.$router.push({ path: "traffic-lab" });
      }
    },
  },
};
</script>

<style lang="scss">
#logoContainer {
  position: fixed;
  top: 20px;
  right: 20px;
  height: 100px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  #circleLogo {
    transform: rotate(0deg);
    position: fixed;
    height: 5rem;
    width: 5rem;
    z-index: 1000;
  }
  #hand {
    position: fixed;
    height: 2rem;
    z-index: 1001;
  }
}

#logos {
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 1000;
}
.website {
  * {
    color: #410807;
  }
}
</style>
