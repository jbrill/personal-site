import Vue from "vue";
import Router from "vue-router";
import App from "./App.vue";
import About from "./components/About.vue";
import Home from "./components/Home.vue";
import Work from "./components/Work.vue";
import Resume from "./components/Resume.vue";
import Portfolio from "./components/Portfolio.vue";

import Photos from "./components/photos/Photos.vue";
import Vietnam from "./components/photos/Vietnam.vue";
import China from "./components/photos/China.vue";
import Technology from "./components/photos/Technology.vue";
import SouthAfrica from "./components/photos/SouthAfrica.vue";
import Etc from "./components/photos/Etc.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
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
      path: "/work",
      name: "work",
      component: Work
    },
    {
      path: "/photography",
      name: "photography",
      component: Photos
    },
    {
      path: "/photography/vietnam",
      name: "vietnam",
      component: Vietnam
    },
    {
      path: "/photography/china",
      name: "china",
      component: China
    },
    {
      path: "/photography/technology",
      name: "technology",
      component: Technology
    },
    {
      path: "/photography/south_africa",
      name: "south_africa",
      component: SouthAfrica
    },
    {
      path: "/photography/etc",
      name: "etc",
      component: Etc
    },
    {
      path: "/resume",
      name: "resume",
      component: Resume
    }
  ]
});

new Vue({
  router,
  el: "#app",
  render: h => h(App)
});
