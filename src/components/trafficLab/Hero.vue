<template>
  <section id="hero" class="w-full flex flex-col items-center">
    <img
      :src="require(`@/assets/img/trafficlab/intro.svg`)"
      alt=""
      class="w-2/3 lg:1/3 h-auto image-animate"
      v-observe-visibility="animateImageIn"
    />
    <p
      class="text-intro text-center bold text-animate"
      v-animate-text="'large'"
      v-observe-visibility="animateTextIn"
    >
      Hello! I'm Dan Traian!
    </p>
    <p
      class="text-medium text-center bold lg:mx-20 mt-10  text-animate"
      v-animate-text="'large'"
      v-observe-visibility="animateTextIn"
    >
      I have a passion for building highly polished user experiences, and enjoy seeing
      them developed to the very end. I strive to work in cross-disciplinary teams to
      innovate and deliver!
    </p>
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
