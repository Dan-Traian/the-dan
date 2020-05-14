<template>
  <div id="app" class="m-0 p-0 overflow-x-hidden flex">
    <div id="pointer"></div>

    <scene></scene>

    <div class="content w-full lg:max-w-6xl mx-auto">
      <hero></hero>

      <!--      <div class="spacer w-full py-20"></div>-->

      <what-now></what-now>

      <!--      <div class="spacer w-full py-20"></div>-->

      <background></background>

      <!--      <div class="spacer w-full py-20"></div>-->

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
    whatNow: WhatNow,
    background: Background,
    contact: Contact,
  },
  computed: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss"></style>
