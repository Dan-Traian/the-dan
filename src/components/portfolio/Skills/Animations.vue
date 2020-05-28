<template>
  <skill skill-name="Animations">
    <div class="w-full flex flex-wrap">
      <img :src="require(`@/assets/img/logos/animations/gsap.svg`)" class="skill-logo" alt="" />
      <img :src="require(`@/assets/img/logos/animations/create.png`)" class="skill-logo" alt="" />
      <img :src="require(`@/assets/img/logos/animations/three.jpeg`)" class="skill-logo" alt="" />
    </div>

    <div class="w-full flex flex-wrap world-cloud">
      <p class="word mr-16">GSAP</p>
      <p class="word mr-16">Timelines</p>
      <p class="word mr-16">Tweens</p>
      <p class="word mr-16">One page story telling</p>
      <p class="word mr-16">Native animations</p>
      <p class="word mr-16">Create.js</p>
      <p class="word mr-16">Anime.js</p>
      <p class="word mr-16">Three.js + Vue</p>
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
