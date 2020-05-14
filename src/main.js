import Vue from "vue";
import Axios from "axios";

import "@/assets/sass/app.scss";
import App from "./App.vue";

Vue.prototype.$http = Axios;

Vue.config.productionTip = false;

new Vue({
  data: {},

  mounted() {},

  components: {},

  methods: {},
  watch: {},
  render: h => h(App)
}).$mount("#app");
