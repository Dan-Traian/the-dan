<template>
  <div id="background" class="w-full flex justify-center flex-col">
    <section class="flex justify-center">
      <div class="box-wide  flex flex-col">
        <div class="w-full flex ">
          <div class="box box-yellow"></div>
          <div class="box">
            <img
              :src="require(`@/assets/img/trafficlab/relax.svg`)"
              alt=""
              class="w-full h-auto image-animate"
              v-observe-visibility="animateImageIn"
            />
          </div>
        </div>
        <div class="box box-dark ml-auto"></div>
      </div>
      <div class="box-wide"></div>
    </section>

    <section id="now" class="w-full flex justify-center min-h-40 mb-20">
      <div class="box-wide flex ">
        <div class="box ml-auto flex items-center justify-center flex-col mt-auto">
          <p class="text-intro bold ">
            2015
          </p>
          <p class="text-intro bold">
            -20
          </p>
        </div>
      </div>
      <div class="box-wide box-yellow p-10 text-dark">
        <p class="text-4xl bold">Whats my background?</p>
        <p
          class="text-2xl bold mt-6  text-animate"
          v-animate-text="'small-miso'"
          v-observe-visibility="animateTextIn"
        >
          Graduating from KEA in Multimedia Design and technology, I had an internship at
          Superb as a digital content and social media creator. After 6 months, I
          continued my education with a Top Up in Web development.
        </p>
        <p
          class="text-2xl bold mt-6 text-animate"
          v-animate-text="'small-miso'"
          v-observe-visibility="animateTextIn"
        >
          Midway to the top up, I got hired at Flyhjaelp, as a junior Full stack
          developer. Jumping into an already existing project, I slowly developed myself
          into a Laravel and Vue developer, focused more on the frontend part. The team I
          was part of had an amazing impact in my growth, slowly gaining more knowledge in
          testing, security integrations and backend servers.
        </p>
        <p
          class="text-2xl bold mt-6 text-animate"
          v-animate-text="'small-miso'"
          v-observe-visibility="animateTextIn"
        >
          With my prior experience, I slowly took over the creative and design processes,
          becoming the lead designer in the team, which was a combined position with my
          still in place frontend developer responsibilities and tasks.
        </p>
      </div>
    </section>
  </div></template
>

<script>
import { globalMixin } from "../../mixins/GlobalMixin";

export default {
  mixins: [globalMixin],

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
