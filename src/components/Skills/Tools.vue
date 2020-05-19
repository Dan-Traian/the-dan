<template>
  <skill skill-name="Tools">
    <div class="w-full flex flex-wrap">
      <img :src="require(`@/assets/img/logos/tools/sketch.svg`)" class="skill-logo" alt="" />
      <img :src="require(`@/assets/img/logos/tools/studio.svg`)" class="skill-logo" alt="" />
      <img :src="require(`@/assets/img/logos/tools/ps.png`)" class="skill-logo " alt="" />
      <img :src="require(`@/assets/img/logos/tools/ai.png`)" class="skill-logo" alt="" />
      <img :src="require(`@/assets/img/logos/tools/id.png`)" class="skill-logo" alt="" />
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
