<template>
  <skill skill-name="JavaScript">
    <div class="flex w-full mt-10 items-center">
      <img :src="require(`@/assets/img/logos/javascript/javascript.png`)" class="skill-logo" alt="" />
      <p class="text-3xl bold">Native JavaScript FTW 🎉</p>
    </div>
    <div class="w-full mt-10">
      <p class="text-base mac:text-2xl light mt-5">
        Been writing in it for almost 7 years and its the part I shine the most
      </p>
    </div>

    <div class="flex w-full items-center mt-10">
      <img :src="require(`@/assets/img/logos/javascript/vue.png`)" class="skill-logo" alt="" />
      <img :src="require(`@/assets/img/logos/javascript/vuex.png`)" class="skill-logo" alt="" />
      <p class="text-base mac:text-2xl light">
        Vue JS + Routing + VUEX and plugins
      </p>
    </div>
    <div class="flex w-full items-center mt-10">
      <img :src="require(`@/assets/img/logos/javascript/jquery.png`)" class="skill-logo" alt="" />
      <p class="text-base mac:text-2xl light">
        jQuery and plugins
      </p>
    </div>
    <div class="flex w-full items-center mt-10">
      <p class="text-base mac:text-2xl light">
        Previous experience with Node + Express, jQuery
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
