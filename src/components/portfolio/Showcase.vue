<template>
  <section id="showcase" class="w-full flex mb-32 lg:my-3 relative">
    <div class="absolute backgroundImage "></div>

    <div class="w-full  relative z-50">
      <p class="text-3xl lg:text-5xl ">I recently took a 100 days Design Challenge</p>
      <p class="text-2xl lg:text-3xl  ">
        You can follow my progress on
        <a
          href="https://www.instagram.com/daysofcss/"
          target="_blank"
          class="hoverable link-reset underline bold"
        >
          Instagram
        </a>
        , <br />
        and bellow you can see some of my recent posts
      </p>
    </div>
    <div class=" w-full flex  flex-wrap">
      <img
        :key="index"
        v-for="index in 12"
        :src="require(`@/assets/img/days/day` + index + '.png')"
        alt=""
        class="imageHover h-20 w-auto m-10 "
        @click="enlargeImageIn"
      />
    </div>
    <transition v-if="crtEnlargeImageSrc" name="fade">
      <div
        id="imageLarge"
        class="flex flex-col items-center justify-center"
        @click="closeImage"
      >
        <img :src="crtEnlargeImageSrc" alt="" />
        <ion-icon name="close" class="closeIcon text-3xl p-4"></ion-icon>
      </div>
    </transition>
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
    return {
      crtEnlargeImageSrc: null,
    };
  },

  created() {},

  mounted() {},

  computed: {},

  watch: {},

  methods: {
    enlargeImageIn(evt) {
      this.crtEnlargeImageSrc = evt.target.currentSrc;
    },
    closeImage() {
      this.crtEnlargeImageSrc = null;
    },
  },
};
</script>
<style lang="scss">
.imageHover {
  transform: scale(1, 1);
  transform-origin: center;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.03, 1.03);
  }
}

.backgroundImage {
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  transform-origin: center;
  transform: scaleX(3);

  /*background-image: linear-gradient(*/
  /*  45deg,*/
  /*  rgb(114, 97, 147) 20%,*/
  /*  rgb(227, 123, 124) 60%,*/
  /*  rgb(255, 228, 180)*/
  /*);*/

  background-image: linear-gradient(45deg, #e35f47 20%, #f4e5dd 60%, #98f5fd);
}
#imageLarge {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  transition: all 1s ease-in-out;
  background-color: rgba(32, 42, 51, 0.75);
  z-index: 1002;

  img {
    width: 100%;
    height: 100%;
    max-width: 900px;
    max-height: 900px;
  }
  .closeIcon {
    margin-top: 30px;
    border-radius: 100%;
    border: 1px solid white;
    top: 20px;
    right: 20px;
    color: #fff;
    z-index: 1002;
    transition: all 0.3s ease-in-out;
    &:hover {
      background-color: white;
      color: #000;
    }
  }
}
</style>
