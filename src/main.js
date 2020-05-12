import Vue from "vue";
import Axios from "axios";

import "@/assets/sass/app.scss";
import App from "./App.vue";
// import store from "./store/store";
// import router from "./routes/route";

import ClipboardDirective from "./directives/ClipboardDirective";

Vue.prototype.$http = Axios;

Vue.config.productionTip = false;
Vue.directive("clipboard", ClipboardDirective);

new Vue({
  // router,
  // store,
  data: {},

  mounted() {},

  components: {},

  methods: {},
  watch: {},
  render: h => h(App)
}).$mount("#app");
