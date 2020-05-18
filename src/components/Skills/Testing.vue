<template>
  <skill skill-name="Testing">
    <div class="flex w-full items-center">
      <img :src="require(`@/assets/img/logos/css/tailwind.png`)" class="skill-logo" alt="" />
      <p class="text-3xl bold">
        Title skills
      </p>
    </div>
    <div class="w-full mt-10">
      <p class="text-2xl light mt-5">
        Been writing CSS ever since I first got introduced to making websites (9 years now ).
      </p>
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
