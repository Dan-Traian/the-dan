<template>
  <component v-bind:is="componentType"></component>
</template>

<script>
import About from "./About";
import Background from "./Background";
import Contact from "./Contact";
import Skills from "./Skills";

export default {
  mixins: [],

  components: {
    default: Background,
    about: About,
    background: Background,
    contact: Contact,
    skills: Skills,
  },

  directives: {},

  filters: {},

  props: {
    componentType: {
      required: false,
      type: String,
      default: "default",
    },
  },

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
