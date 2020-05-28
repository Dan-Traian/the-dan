<template>
  <section id="skills" class="w-full flex justify-center flex-col">
    <div class="row w-full flex justify-center">
      <div class="box">
        <img :src="require(`@/assets/img/trafficlab/skills.svg`)" alt="" class="w-full h-auto" />
      </div>
      <div class="box box-yellow  flex items-center justify-center box-animate" v-observe-visibility="animateBoxIn">
        <p class="text-5xl bold text-dark  text-center   ">Skills I <br />danz with</p>
      </div>
    </div>
    <div class="row w-full flex justify-center">
      <div class="box box-dark box-animate" v-observe-visibility="animateBoxIn">
        JavaScript
      </div>
      <div class="box">
        <div class="box-small box-yellow mt-auto mr-auto box-animate" v-observe-visibility="animateBoxIn">
          jQuery
        </div>
      </div>
    </div>
    <div class="row w-full flex justify-center">
      <div class="box">
        <div class="box-small box-yellow mb-auto ml-auto box-animate" v-observe-visibility="animateBoxIn">
          NodeJs
        </div>
      </div>
      <div class="box"></div>
      <div class="box box-dark box-animate" v-observe-visibility="animateBoxIn">Vue.js</div>
      <div class="box ">
        <div class="box-small box-yellow mt-auto mr-auto box-animate" v-observe-visibility="animateBoxIn">
          VUEX
        </div>
      </div>
    </div>
    <div class="row w-full flex justify-center">
      <div class="box">
        <div class="box-small mt-auto mr-auto box-animate" v-observe-visibility="animateBoxIn">
          <img :src="require(`@/assets/img/trafficlab/dog.svg`)" alt="" class="w-full h-auto" />
        </div>
      </div>
      <div class="box box-dark box-animate" v-observe-visibility="animateBoxIn">CSS/SASS</div>
      <div class="box">
        <div class="box-small box-yellow mt-auto mr-auto box-animate" v-observe-visibility="animateBoxIn">
          Typography
        </div>
      </div>
      <div class="box"></div>
    </div>
    <div class="row w-full flex justify-center">
      <div class="box">
        <div class="box-small box-yellow mb-auto mr-auto box-animate" v-observe-visibility="animateBoxIn">Tweening</div>
        <div class="box-small box-dark ml-auto mt-auto box-animate" v-observe-visibility="animateBoxIn">GSAP</div>
      </div>
      <div class="box box-yellow box-animate" v-observe-visibility="animateBoxIn">Animations 🎉</div>
      <div class="box box-dark box-animate" v-observe-visibility="animateBoxIn">
        UI/UX <br />
        Design
      </div>
      <div class="box">
        <div class="box-small box-yellow mb-auto mr-auto box-animate" v-observe-visibility="animateBoxIn">Mockups</div>
        <div class="box-small box-dark ml-auto mt-auto box-animate" v-observe-visibility="animateBoxIn">Prototypes</div>
      </div>
    </div>
    <div class="row w-full flex justify-center">
      <div class="box">
        <div class="box-small box-yellow mb-auto mr-auto box-animate" v-observe-visibility="animateBoxIn">Three.js</div>
      </div>
      <div class="box">
        <div class="box-small box-dark mb-auto ml-auto box-animate" v-observe-visibility="animateBoxIn">
          Scroll <br />
          animations
        </div>
      </div>
      <div class="box"></div>
      <div class="box">
        <div class="box-small box-yellow mt-auto mr-auto box-animate" v-observe-visibility="animateBoxIn">Cypress</div>
      </div>
    </div>
    <div class="row w-full flex justify-center">
      <div class="box box-animate" v-observe-visibility="animateBoxIn">
        <img :src="require(`@/assets/img/trafficlab/messy.svg`)" alt="" class="w-full h-auto" />
      </div>
      <div class="box">
        <div class="box-small box-dark mt-auto ml-auto box-animate" v-observe-visibility="animateBoxIn">
          Unit <br />
          testing
        </div>
      </div>
      <div class="box box-dark box-animate" v-observe-visibility="animateBoxIn">Testing</div>
      <div class="box"></div>
    </div>
    <div class="row w-full flex justify-center">
      <div class="box">
        <div class="box-small box-dark mb-auto ml-auto box-animate" v-observe-visibility="animateBoxIn">
          Blade
        </div>
      </div>
      <div class="box box-yellow">Laravel</div>
      <div class="box box-animate" v-observe-visibility="animateBoxIn">
        <img :src="require(`@/assets/img/trafficlab/design.svg`)" alt="" class="w-full h-auto" />
      </div>
      <div class="box"></div>
    </div>
    <div class="row w-full flex justify-center">
      <div class="box"></div>
      <div class="box">
        <div class="box-small box-dark mt-auto mr-auto box-animate" v-observe-visibility="animateBoxIn">
          Photoshop
        </div>
      </div>
      <div class="box box-dark">Tools</div>
      <div class="box">
        <div class="box-small box-yellow mb-auto mr-auto box-animate" v-observe-visibility="animateBoxIn">
          Sketch
        </div>
      </div>
    </div>
    <div class="row w-full flex justify-center">
      <div class="box"></div>
      <div class="box">
        <div class="box-small box-yellow mb-auto ml-auto box-animate" v-observe-visibility="animateBoxIn">
          InDesign
        </div>
      </div>
      <div class="box"></div>
      <div class="box">
        <div class="box-small box-yellow mb-auto mr-auto box-animate" v-observe-visibility="animateBoxIn">
          InVision <br />
          Studio
        </div>
      </div>
    </div>
  </section>
</template>

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
