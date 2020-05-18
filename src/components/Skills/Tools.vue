<template>
  <skill skill-name="Tools">
    <div class="flex w-full">
      <img :src="require(`@/assets/img/logos/tools/sketch.svg`)" class="skill-logo" alt="" />
      <img :src="require(`@/assets/img/logos/tools/studio.svg`)" class="skill-logo ml-20" alt="" />
    </div>
    <div class="w-full mt-10">
      <p class="text-3xl bold">Sketch and InVision Studio</p>

      <p class="text-base mac:text-2xl light mt-5">
        My two main prototyping tools for mockups, interactive prototypes and UI demos
      </p>
    </div>
    <div class="flex w-full mt-10">
      <img :src="require(`@/assets/img/logos/tools/ps.png`)" class="skill-logo " alt="" />
      <img :src="require(`@/assets/img/logos/tools/ai.png`)" class="skill-logo" alt="" />
      <img :src="require(`@/assets/img/logos/tools/id.png`)" class="skill-logo" alt="" />
    </div>
    <div class="w-full mt-10">
      <p class="text-3xl bold">Adobe Photoshop , Illustrator and InDesign</p>

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
