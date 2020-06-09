<template>
  <div class="skill py-20">
    <span class="text-large bold hoverable text-center" :data-text="skillName">
      {{ skillName }}
    </span>
    <kinesis-container event="move" class="skill-box">
      <kinesis-element :strength="50" type="translate">
        <kinesis-element
          :strength="4"
          type="depth_inv"
          class="child-container w-full flex flex-col p-10 mac:p-16 text-xl"
        >
          <div class="content ">
            <slot></slot>
          </div>
          <span class="text-large bold overlay-text">
            {{ skillName }}
          </span>
        </kinesis-element>
      </kinesis-element>
    </kinesis-container>
  </div>
</template>

<script>
import { KinesisContainer, KinesisElement } from "vue-kinesis";

export default {
  mixins: [],

  components: {
    kinesisContainer: KinesisContainer,
    kinesisElement: KinesisElement,
  },

  directives: {},

  filters: {},

  props: {
    skillName: {
      required: true,
      type: String,
    },
  },

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

<style lang="scss">
.skill {
  display: inline-block;
  position: relative;
  width: 100%;

  &:hover {
    .skill-box {
      opacity: 1;
      z-index: 800;
      display: block;
    }
  }
  .skill-box {
    display: none;
    position: absolute;
    width: 90%;
    top: 0;
    left: 10%;
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
    z-index: 600;
    transform: translate(0, -25%);
    .child-container {
      background-color: #fff;
      position: relative;
      overflow: hidden;
      .overlay-text {
        position: absolute;
        bottom: -5%;
        right: -50px;
        z-index: 30;
        color: #f3f5f9;
        transform: scale(1.2);
      }
      .content {
        position: relative;
        z-index: 60;
      }
    }
  }
}

.skill-logo {
  display: block;
  width: auto;
  height: 80px;
  margin-right: 20px;
  margin-bottom: 20px;
  @media only screen and (min-width: 1680px) {
    height: 100px;
  }
}
.word {
  padding: 15px;
  font-size: 30px;
  font-weight: bold;
}
</style>
