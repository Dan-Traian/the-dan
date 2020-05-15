<template
  ><section id="contact" class="w-full flex mb-32 lg:my-32" v-observe-visibility="visibilityChanged">
    <div class="text mt-20 flex flex-col w-full">
      <p class="text-2xl lg:text-6xl light light w-full">
        Dont be a stranger! <br class="block lg:hidden" />
        If you got a job opportunity or a cool project idea, drop me a line...
      </p>
      <a class="link text-email outlined-text link-reset bold" href="mailto:roman.dan.traian@gmail.com">
        <span class="bold">Shoot an email</span>
      </a>
      <div class="w-full lg:w-1/2 xl:w-1/3 ml-auto mt-32">
        <p class="animate text-base lg:text-xl light">
          Even if I cant help directly with, I may be able to recommend people from my network of super talented
          contacts.
        </p>
        <p class="animate text-base lg:text-xl light mt-10 lg:mt-20">
          You can also find me on <a href="#" class="link-reset bold" target="_blank"> LinkedIn</a>.
        </p>
      </div>
    </div>
  </section></template
>

<script>
// import { TimelineLite } from "gsap";
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

  mounted() {},

  computed: {},

  watch: {},

  methods: {
    visibilityChanged(isVisible, element) {
      console.log(isVisible);
      console.log(element);
      this.animateIn();
    },
    animateIn() {
      let texts = document.querySelectorAll("#contact .textInitial");
      console.log(texts);
      texts.forEach(element => {
        element.classList.add("textVisible");
      });
    },
  },
};
</script>
