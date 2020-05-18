<template>
  <skill skill-name="Animations">
    <div class="flex w-full items-center">
      <img :src="require(`@/assets/img/logos/animations/gsap.svg`)" class="skill-logo" alt="" />
      <img :src="require(`@/assets/img/logos/animations/create.png`)" class="skill-logo" alt="" />
    </div>
    <div class="w-full mt-10">
      <p class="text-3xl bold">
        Animations tools
      </p>
      <p class=" text-base mac:text-2xl light mt-5">
        Web animations have been a constant focus for me, which I always try to grow as much as possible. In my spare
        time, I fiddle around aplenty with GSAP new features (v.3 is 🔥). Tweening, timelines, SVG animations have never
        been easier than now.
      </p>
      <p class=" text-base mac:text-2xl mt-5">
        A short list of plugins and libraries I use for the animations I develop : <br />
        <b>Create JS</b> ( ease, tween, sound and load ), <br /><b>AnimeJs</b> for its easings <br /><b>ScrollMagic</b>
        for , well, scroll magic events and animations <br />
        and ofc, <b>native Js</b> animations with CSS classes and listeners
      </p>
      <p class=" text-base mac:text-2xl light mt-5">
        My eyes sparkle whenever I get a good idea for a single page, story telling, scrolling experience.
      </p>
    </div>
    <div class="flex w-full items-center">
      <img :src="require(`@/assets/img/logos/animations/three.jpeg`)" class="skill-logo" alt="" />
    </div>
    <div class="w-full mt-10">
      <p class="text-3xl bold">
        Vue and ThreeJs
      </p>
      <p class=" text-base mac:text-2xl light mt-5">
        With my dive into Vue, I'm slowly getting better and better at combining all of the above with the advantages of
        Vue and its animation and transition system. Components are a huge help separating behaviours.
      </p>
      <p class=" text-base mac:text-2xl light mt-5">
        Very recent I have started diving into ThreeJS as well 🌟
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
