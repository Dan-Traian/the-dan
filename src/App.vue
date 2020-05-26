<template>
  <div>
    <website v-if="!showTraffic"></website>
    <traffic v-else></traffic>
  </div>
</template>

<script>
import Traffic from "./components/Traffic";
import Website from "./Website";
export default {
  name: "app",

  components: {
    website: Website,
    traffic: Traffic,
  },
  computed: {},
  data() {
    return {
      showTraffic: false,
    };
  },
  created() {
    let websiteTheme = {};
    location.search
      .substr(1)
      .split("&")
      .forEach(function(item) {
        websiteTheme[item.split("=")[0]] = item.split("=")[1];
      });

    if (websiteTheme !== [] && websiteTheme.theme === "traffic") {
      console.log("need to show traffic");
      this.showTraffic = true;

      document.querySelector("html").classList.add("trafficLab");
    }
  },
  mounted() {},
  methods: {},
};
</script>
