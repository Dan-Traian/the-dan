<template>
  <section id="whatNow" class="w-full flex items-center justify-start">
    <div class="flex w-full">
      <div class="w-1/2 overflow-hidden">
        <p class="text-medium light text-animate" v-animate-text v-observe-visibility="animateTextIn">
          What am I doing right now?
        </p>
      </div>

      <div class="w-1/2">
        <p class="text-base lg:text-xl light mt-4">
          Currently I am working as a Full stack Developer, working mainly on Laravel and Vue.js at Flyhjaelp Aps.
        </p>

        <p class="text-base lg:text-xl light mt-16">
          I am also an aspiring UX / UI designer 🔥
        </p>
        <p class="text-base lg:text-xl light mt-16">
          Due to the Coronavirus situation, I will be out of job starting mid summer - July 2020.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
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
