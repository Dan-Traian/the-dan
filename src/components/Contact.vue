<template
  ><section id="contact" class="w-full flex mb-32 lg:my-32">
    <div class="text mt-20 flex flex-col w-full">
      <p
        class="text-2xl lg:text-6xl light light w-full text-animate"
        v-animate-text="'medium'"
        v-observe-visibility="animateTextIn"
      >
        Dont be a stranger! If you got a job opportunity or a cool project idea, drop me a line...
      </p>
      <a
        class="link text-email outlined-text link-reset bold text-animate hoverable"
        v-animate-text="'large'"
        v-observe-visibility="animateTextIn"
        href="mailto:roman.dan.traian@gmail.com"
      >
        Shoot an email
      </a>
      <div class="w-full lg:w-1/2 xl:w-1/3 ml-auto mt-32">
        <p class="animate text-base lg:text-xl light">
          Even if I cant help directly with, I may be able to recommend people from my network of super talented
          contacts.
        </p>
        <p class="animate text-base lg:text-xl light mt-10 lg:mt-20">
          You can also find me on <a href="#" class="link-reset bold hoverable" target="_blank"> LinkedIn</a>.
        </p>
      </div>
    </div>
  </section></template
>

<script>
// import { TimelineLite } from "gsap";
import { globalMixin } from "../mixins/GlobalMixin";

export default {
  mixins: [globalMixin],

  components: {},

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
