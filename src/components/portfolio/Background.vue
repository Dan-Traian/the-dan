<template>
  <section id="background" class="w-full flex items-center justify-star">
    <div class="flex w-full">
      <div class="w-1/2 flex flex-col">
        <p
          class="text-medium light text-animate"
          v-animate-text="'medium'"
          v-observe-visibility="animateTextIn"
        >
          Whats my background?
        </p>
        <div class="w-2/3 text-right" id="yearsNumbers">
          <p class="text-large bold">2015</p>
          <p class="text-large bold">-20</p>
        </div>
      </div>

      <div class="w-1/2">
        <p
          class="text-base lg:text-xl light mt-4 text-animate"
          v-animate-text="'small'"
          v-observe-visibility="animateTextIn"
        ></p>
        Graduating from KEA in Multimedia Design and technology, I had an internship at
        Superb as a digital content and social media creator. After 6 months, I continued
        my education with a Top Up in Web development.

        <p
          class="text-base lg:text-xl light mt-16 text-animate"
          v-animate-text="'small'"
          v-observe-visibility="animateTextIn"
        >
          Midway to the top up, I got hired at Flyhjaelp, as a junior Full stack
          developer. Jumping into an already existing project, I slowly developed myself
          into a Laravel and Vue developer, focused more on the frontend part. The team I
          was part of had an amazing impact in my growth, slowly gaining more knowledge in
          testing, security integrations and backend servers.
        </p>
        <p
          class="text-base lg:text-xl light mt-16 text-animate"
          v-animate-text="'small'"
          v-observe-visibility="animateTextIn"
        >
          With my prior experience, I slowly took over the creative and design processes,
          becoming the lead designer in the team, which was a combined position with my
          still in place frontend developer responsibilities and tasks.
        </p>
      </div>
    </div>
  </section></template
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
