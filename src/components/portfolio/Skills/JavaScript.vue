<template>
  <skill skill-name="JavaScript">
    <div class="w-full flex flex-wrap">
      <img :src="require(`@/assets/img/logos/javascript/javascript.png`)" class="skill-logo" alt="" />
      <img :src="require(`@/assets/img/logos/javascript/vue.png`)" class="skill-logo" alt="" />
      <img :src="require(`@/assets/img/logos/javascript/vuex.png`)" class="skill-logo" alt="" />
      <img :src="require(`@/assets/img/logos/javascript/jquery.png`)" class="skill-logo" alt="" />
      <img :src="require(`@/assets/img/logos/javascript/node.png`)" class="skill-logo" alt="" />
    </div>
  </skill>
</template>

<script>
import Skill from "./Skill";

export default {
  mixins: [],

  components: { skill: Skill },

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
