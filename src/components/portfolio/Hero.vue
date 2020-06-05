<template>
  <section id="hero" class="w-full flex lg:pt-32 mac:pt-48 ">
    <div class="text pt-32 mac:pt-64" id="introText">
      <p
        class="text-intro light text-animate "
        v-animate-text="'large'"
        v-observe-visibility="animateTextIn"
        data-theme="dark"
      >
        Hello! I'm Dan Traian! I have a passion for building highly polished user
        experiences, and enjoy seeing them developed to the very end. I strive to work in
        cross-disciplinary teams to innovate and deliver!
      </p>
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
<style lang="scss"></style>
