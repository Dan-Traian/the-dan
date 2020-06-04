<template>
  <div class="m-0 p-0 overflow-x-hidden flex">
    <transition name="page-slide">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  components: {},
  computed: {},
  data() {
    return {};
  },
  created() {
    console.log(
      "%c%s",
      "color: #EEBECE; background: ; font-size: 24px; padding: 20px 30px",
      "Hey, do you have questions? run `getEmail()`",
    );

    window.getEmail = function() {
      console.log(
        "%c%s",
        "color: #37cfb1; background: #2643f7; font-size: 24px; padding: 20px 30px",
        "You welcome ;) roman.dan.traian@gmail.com",
      );
    };
  },
  mounted() {},
  methods: {},
};
</script>
