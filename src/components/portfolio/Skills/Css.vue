<template>
  <skill skill-name="CSS / SASS">
    <div class="w-full flex flex-wrap">
      <img :src="require(`@/assets/img/logos/css/css.svg`)" class="skill-logo" alt="" />
      <img :src="require(`@/assets/img/logos/css/sass.svg`)" class="skill-logo" alt="" />
      <img :src="require(`@/assets/img/logos/css/tailwind.png`)" class="skill-logo" alt="" />
    </div>

    <div class="w-full flex flex-wrap world-cloud">
      <p class="word mr-6 mac:mr-16">CSS</p>
      <p class="word mr-6 mac:mr-16">SASS / SCSS</p>
      <p class="word mr-6 mac:mr-16">Tailwind</p>
      <p class="word mr-6 mac:mr-16">CSS framework</p>
      <p class="word mr-6 mac:mr-16">Utility first</p>
      <p class="word mr-6 mac:mr-16">Typography</p>
      <p class="word mr-6 mac:mr-16">Responsiveness across devices</p>
      <p class="word mr-6 mac:mr-16">Animations</p>
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
