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
        <div class="skill py-20">
          <span class="text-large outlined-text bold hoverable text-center" data-text="JavaScript">JavaScript</span>
        </div>
        <div class="skill py-20">
          <span class="text-large outlined-text bold hoverable text-center" data-text="CSS/SASS">CSS/SASS</span>
        </div>
        <div class="skill py-20">
          <span class="text-large outlined-text bold hoverable text-center" data-text="DESIGN">DESIGN</span>
        </div>
        <div class="skill py-20">
          <span class="text-large outlined-text bold hoverable text-center" data-text="LARAVEL">LARAVEL</span>
        </div>
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
<style lang="scss">
.skill {
  display: inline-block;
  position: relative;
  &:before,
  &:after {
    content: "";
    width: 100%;
    height: 1px;
    background-color: rgba(65, 8, 7, 0.5);
    transform: scaleX(5);
    position: absolute;
    top: 0;
    left: 0;
  }

  &:after {
    top: 100%;
  }
}
</style>
