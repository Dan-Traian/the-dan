import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
import Introduction from "../components/pages/Introduction";
import Wip from "../components/pages/Wip";

// UI routers
import Typography from "../components/pages/ui/Typography";
import Colors from "../components/pages/ui/Colors";
import Icons from "../components/pages/ui/Icons";

const routes = [
  { path: "*", component: Wip },
  { path: "/", component: Introduction },
  { path: "/introduction", component: Introduction },
  { path: "/typography", component: Typography },
  { path: "/colors", component: Colors },
  { path: "/icons", component: Icons }
];

let router = new VueRouter({
  routes, // short for `routes: routes`,
  linkExactActiveClass: "active",
  mode: "history"
});

export default router;
