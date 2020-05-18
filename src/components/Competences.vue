<template>
  <section id="whatNow" class="w-full flex items-center justify-start">
    <div class="w-full">
      <div class="w-full">
        <p class="text-medium light text-animate" v-animate-text="'large'" v-observe-visibility="animateTextIn">
          Core competences
        </p>
        <p class="text-small light ">
          Hover for details
        </p>
      </div>

      <div class="w-full mt-20">
        <div class="skill py-20">
          <span class="text-large outlined-text bold hoverable text-center" data-text="JavaScript">JavaScript</span>

          <kinesis-container event="move" class="skill-box">
            <kinesis-element :strength="50" type="translate">
              <kinesis-element
                :strength="4"
                type="depth_inv"
                class="child-container w-full flex flex-col px-10 py-20 text-xl bg-red"
              >
                <p class="text-base lg:text-xl light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta, mauris quis interdum mattis,
                  mauris risus consectetur
                </p>
              </kinesis-element>
            </kinesis-element>
          </kinesis-container>
        </div>
        <div class="skill py-20">
          <span class="text-large outlined-text bold hoverable text-center" data-text="CSS/SASS">CSS/SASS</span>
          <kinesis-container event="move" class="skill-box">
            <kinesis-element :strength="50" type="translate">
              <kinesis-element
                :strength="4"
                type="depth_inv"
                class="child-container w-full flex flex-col px-10 py-20 text-xl bg-red"
              >
                <p class="text-base lg:text-xl light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta, mauris quis interdum mattis,
                  mauris risus consectetur
                </p>
              </kinesis-element>
            </kinesis-element>
          </kinesis-container>
        </div>
        <div class="skill py-20">
          <span class="text-large outlined-text bold hoverable text-center" data-text="DESIGN">DESIGN</span>
          <kinesis-container event="move" class="skill-box">
            <kinesis-element :strength="50" type="translate">
              <kinesis-element
                :strength="4"
                type="depth_inv"
                class="child-container w-full flex flex-col px-10 py-20 text-xl bg-red"
              >
                <p class="text-base lg:text-xl light ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta, mauris quis interdum mattis,
                  mauris risus consectetur
                </p>
              </kinesis-element>
            </kinesis-element>
          </kinesis-container>
        </div>
        <div class="skill py-20">
          <span class="text-large outlined-text bold hoverable text-center" data-text="LARAVEL">LARAVEL</span>
          <kinesis-container event="move" class="skill-box">
            <kinesis-element :strength="50" type="translate">
              <kinesis-element
                :strength="4"
                type="depth_inv"
                class="child-container w-full flex flex-col px-10 py-20 text-xl bg-red"
              >
                <p class="text-base lg:text-xl light ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta, mauris quis interdum mattis,
                  mauris risus consectetur
                </p>
              </kinesis-element>
            </kinesis-element>
          </kinesis-container>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { KinesisContainer, KinesisElement } from "vue-kinesis";
import { globalMixin } from "../mixins/GlobalMixin";

export default {
  mixins: [globalMixin],

  components: {
    kinesisContainer: KinesisContainer,
    kinesisElement: KinesisElement,
  },

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
<style lang="scss">
.skill {
  display: inline-block;
  position: relative;
  width: 100%;
  &:before,
  &:after {
    content: "";
    width: 100%;
    height: 1px;
    background-color: rgba(65, 8, 7, 0.5);
    transform: scaleX(5);
    position: absolute;
    top: 0;
    left: 0;
  }

  &:after {
    top: 100%;
  }
  &:hover {
    .skill-box {
      display: block;
      opacity: 1;
    }
  }
  .skill-box {
    display: none;
    position: absolute;
    width: 70%;
    top: 30%;
    left: 20%;
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
    z-index: 600;
    .child-container {
      background-color: #98f5fd;
    }
  }
}
</style>
