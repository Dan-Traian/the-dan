<template>
  <div class="w-screen flex miso">
    <div class="content-sized">
      <div id="dixaContainer">
        <profile></profile>
      </div>
      <div id="chatContainer">
        <div id="messagesContainer"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Profile from "./Profile";
export default {
  mixins: [],

  components: { Profile },

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
$dixa-light: #f0f0ff;
$dixa-dark: #333333;
$dixa-accent-light: #5644d8;
$dixa-accent: #2e1da5;

#chatContainer {
  border: 1px solid #e2e2e2;
}
</style>
