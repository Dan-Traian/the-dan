<template>
  <skill skill-name="CSS / SASS">
    <div class="flex w-full mt-10">
      <img :src="require(`@/assets/img/logos/css/css.svg`)" class="skill-logo" alt="" />
      <img :src="require(`@/assets/img/logos/css/sass.svg`)" class="skill-logo" alt="" />
    </div>
    <div class="w-full mt-10">
      <p class="text-3xl bold">CSS & SASS /SCSS</p>

      <p class="text-base mac:text-2xl light mt-5">
        Been writing CSS ever since I first got introduced to making websites (9 years now ).
      </p>
      <p class="text-base mac:text-2xl light mt-5">
        Later I have been exposed to SASS/SCSS and now I mixins are my best friends! 👨‍💻
      </p>
      <p class="text-base mac:text-2xl light mt-5">
        Over the years, I tried different manners of solving responsiveness, typography, colors, animations and
        transitions.
      </p>
    </div>

    <div class="flex w-full mt-10">
      <img :src="require(`@/assets/img/logos/css/tailwind.png`)" class="skill-logo" alt="" />
    </div>
    <div class="w-full mt-10">
      <p class="text-3xl bold">Tailwind</p>

      <p class="text-base mac:text-2xl light mt-5">
        For my content creation, digital materials, prints or file adjustements.
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
