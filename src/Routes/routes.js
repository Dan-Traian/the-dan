import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Traffic from "../components/trafficLab/Traffic";
import Portfolio from "../components/portfolio/Portfolio";
import Dixa from "../components/dixa/Dixa";
import Playground from "../components/Playground";
import Boxxy from "../components/boxi/Boxxy";

const routes = [
  { path: "*", component: Portfolio },
  { path: "/", component: Portfolio },
  { path: "/traffic-lab", component: Traffic },
  { path: "/dixa", component: Dixa },
  { path: "/playground", component: Playground },
  { path: "/boxxy", component: Boxxy },
];

let router = new VueRouter({
  routes, // short for `routes: routes`,
  linkExactActiveClass: "active",
  mode: "history",
});

export default router;
