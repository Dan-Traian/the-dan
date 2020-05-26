<template>
  <div class="section-containers miso">
    <hero class="min-h-90 pt-40 mb-20 "> </hero>
    <background class="hidden lg:block"></background>
    <now class="hidden lg:block mt-20"></now>
    <div class="hidden lg:block w-full h-30"></div>
    <skills class="hidden lg:block mt-20"></skills>
    <div class="hidden lg:block w-full h-10"></div>
    <contact></contact>
    <div class="w-full h-10"></div>
  </div>
</template>

<script>
import Skills from "./Skills";
import Hero from "./Hero";
import Background from "./Background";
import Now from "./Now";
import Contact from "./Contact";
export default {
  mixins: [],

  components: {
    skills: Skills,
    hero: Hero,
    now: Now,
    background: Background,
    contact: Contact,
  },

  directives: {},

  filters: {},

  props: {},

  data() {
    return {};
  },

  created() {},

  mounted() {},

  computed: {},

  watch: {},

  methods: {},
};
</script>

<style lang="scss">
:root {
  --boxunit: 15rem;
}
@media screen and (min-width: 1920px) {
  :root {
    --boxunit: 20rem;
  }
}

.box-small {
  width: calc(var(--boxunit) / 2);
  height: calc(var(--boxunit) / 2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: bold;
  font-family: "Miso", sans-serif;
}
.box {
  width: var(--boxunit);
  height: var(--boxunit);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  font-family: "Miso", sans-serif;
  font-weight: bold;
}
.box-wide {
  width: calc(var(--boxunit) * 2);
  height: auto;
}

.box,
.box-wide {
  /*border: 1px solid red;*/
}
.box-yellow {
  background-color: #f4ed5b;
  color: #222222 !important;
}
.text-dark {
  color: #222222 !important;
}
.text-white {
  color: #eeeeee !important;
}
.box-dark {
  background-color: #222222;
  color: #fff !important;
}
</style>
