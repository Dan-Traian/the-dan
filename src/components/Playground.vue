<template>
  <div class="w-screen flex ">
    <div class=" h-screen w-auto bg-dark flex items-center overflow-x-scroll">
      <div class="boxxy"></div>
    </div>
  </div>
</template>

<script>
export default {
  mixins: [],

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
html,
body,
* {
  cursor: default;
}
.boxxy {
  background-image: linear-gradient(
    45deg,
    rgb(114, 97, 147) 20%,
    rgb(227, 123, 124) 60%,
    rgb(255, 228, 180)
  );
  width: 800px;
  height: 800px;
}
</style>
