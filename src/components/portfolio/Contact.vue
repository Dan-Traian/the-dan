<template
  ><section id="contact" class="w-full flex mb-32 lg:my-32">
    <div class="text mt-20 flex flex-col w-full">
      <p
        class="text-2xl lg:text-6xl light light w-full text-animate"
        v-animate-text="'medium'"
        v-observe-visibility="animateTextIn"
      >
        Dont be a stranger! If you got a job opportunity or a cool project idea, drop me a
        line...
      </p>
      <a
        id="contactSection"
        class="text-email outlined-text link-reset bold hoverable mt-20"
        href="mailto:roman.dan.traian@gmail.com"
        data-text="Shoot an email"
        >Shoot an email
      </a>
      <p class="text-2xl lg:text-6xl light light w-full">
        OR
      </p>
      <a
        class="text-email outlined-text link-reset bold hoverable"
        href="tel:+45-91840125"
        data-text="Drop a call"
      >
        Drop a call
      </a>

      <div class="w-full lg:w-1/2 xl:w-1/3 ml-auto mt-32">
        <p class="animate text-base lg:text-xl light">
          Even if I cant help directly with, I may be able to recommend people from my
          network of super talented contacts.
        </p>
        <p class="text-base lg:text-xl light mt-10 lg:mt-20">
          You can also find me on
          <a
            href="https://www.linkedin.com/in/dan-traian-roman/"
            class="link-reset bold hoverable"
            target="_blank"
          >
            LinkedIn</a
          >.
        </p>
        <a
          :href="require(`@/assets/dan_roman_cv_summer_2020_.pdf`)"
          class="link-reset text-base lg:text-xl bold hoverable"
          download
        >
          Download CV (PDF 41kb)
        </a>
      </div>
    </div>
  </section></template
>

<script>
import { globalMixin } from "../../mixins/GlobalMixin";

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
