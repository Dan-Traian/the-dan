<template>
  <section id="now" class="w-full flex justify-center text-white">
    <div class="row w-full flex justify-center">
      <div class="box"></div>
      <div class="box">
        <img :src="require(`@/assets/img/trafficlab/reading.svg`)" alt="" class="w-full h-auto" />
      </div>
    </div>
    <div class="row w-full flex justify-center">
      <div class="box-wide box-dark p-10">
        <p class="text-4xl bold text-white">What am I doing right now?</p>
        <p
          class="text-2xl bold text-white mt-6 text-animate"
          v-animate-text="'small-miso'"
          v-observe-visibility="animateTextIn"
        >
          Currently I am working as a Full stack Developer, working mainly on Laravel and Vue.js at Flyhjaelp Aps.
        </p>
        <p
          class="text-2xl bold text-white mt-6 text-animate"
          v-animate-text="'small-miso'"
          v-observe-visibility="animateTextIn"
        >
          I am also an aspiring UX / UI designer 🔥
        </p>
        <p
          class="text-2xl bold text-white mt-6 text-animate"
          v-animate-text="'small-miso'"
          v-observe-visibility="animateTextIn"
        >
          I'll be looking for my next adventure from June 2020.
        </p>
      </div>
      <div class="box-wide"></div>
    </div>
  </section>
</template>

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
