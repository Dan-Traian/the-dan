<template>
  <section id="whatNow" class="w-full flex items-center justify-start">
    <div class="w-full">
      <div class="w-full">
        <p class="text-medium light text-animate" v-animate-text="'large'" v-observe-visibility="animateTextIn">
          Core competences
        </p>
        <p class="text-small light ">
          Hover for details
        </p>
      </div>

      <div class="w-full mt-20">
        <java-script></java-script>
        <css></css>
        <design></design>
        <animations></animations>
        <testing></testing>

        <laravel></laravel>
        <tools></tools>
      </div>
    </div>
  </section>
</template>

<script>
import { globalMixin } from "../../mixins/GlobalMixin";
import JavaScript from "./Skills/JavaScript";
import Css from "./Skills/Css";
import Design from "./Skills/Design";
import Animations from "./Skills/Animations";
import Laravel from "./Skills/Laravel";
import Tools from "./Skills/Tools";
import Testing from "./Skills/Testing";

export default {
  mixins: [globalMixin],

  components: {
    javaScript: JavaScript,
    css: Css,
    design: Design,
    animations: Animations,
    laravel: Laravel,
    tools: Tools,
    testing: Testing,
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
