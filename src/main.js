import Vue from "vue";
import Router from "vue-router";
import App from "./App.vue";
import About from "./components/About.vue";
import Home from "./components/Home.vue";

import Portfolio from "./components/Portfolio.vue";
import Neptune from "./components/Neptune.vue";
import Disruption from "./components/Disruption.vue";
import Dreamgigs from "./components/Dreamgigs.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Portfolio
    },
    {
      path: "/vis",
      name: "vis",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: Portfolio
    },
    {
      path: "/portfolio/neptune",
      name: "neptune",
      component: Neptune
    },
    {
      path: "/portfolio/disruption",
      name: "disruption",
      component: Disruption
    },
    {
      path: "/portfolio/dreamgigs",
      name: "dreamgigs",
      component: Dreamgigs
    },
  ]
});

new Vue({
  router,
  el: "#app",
  render: h => h(App)
});
