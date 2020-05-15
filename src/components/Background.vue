<template>
  <section id="background" class="w-full flex items-center justify-star">
    <div class="flex w-full">
      <div class="w-1/2 flex flex-col">
        <p class="text-medium light text-animate" v-animate-text v-observe-visibility="animateTextIn">
          Whats my background?
        </p>
        <div class="w-2/3 text-right" id="yearsNumbers">
          <p class="number-text" id="yearStart">2015</p>
          <p class="number-text" id="yearEnd">2018</p>
        </div>
      </div>

      <div class="w-1/2">
        <p class="text-base lg:text-xl light mt-4">
          In 2015, I moved to Denmark to attend a Bachelor in Multimedia Design, finished with a Top Up in Web
          Development.
        </p>
      </div>
    </div>
  </section></template
>

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
