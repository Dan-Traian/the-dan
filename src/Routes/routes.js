import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Traffic from "../components/trafficLab/Traffic";
import Portfolio from "../components/portfolio/Portfolio";
import Playground from "../components/Playground";

const routes = [
  { path: "*", component: Portfolio },
  { path: "/", component: Portfolio },
  { path: "/traffic-lab", component: Traffic },
  { path: "/playground", component: Playground },
];

let router = new VueRouter({
  routes, // short for `routes: routes`,
  linkExactActiveClass: "active",
  mode: "history",
});

export default router;
