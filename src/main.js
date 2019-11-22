import Vue from "vue";
import Router from "vue-router";
import App from "./App.vue";
import About from "./components/About.vue";
import Home from "./components/Home.vue";
import Resume from "./components/Resume.vue";

import Portfolio from "./components/Portfolio.vue";
import Neptune from "./components/Neptune.vue";
import Disruption from "./components/Disruption.vue";
import Dreamgigs from "./components/Dreamgigs.vue";
import MusicAndCulture from "./components/MusicAndCulture.vue";
import GenreMixer from "./components/GenreMixer.vue";
import Clinc from "./components/Clinc.vue";

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
      path: "/portfolio/music_and_culture",
      name: "music_and_culture",
      component: MusicAndCulture
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
    {
      path: "/portfolio/genre_mixer",
      name: "genre_mixer",
      component: GenreMixer
    },
    {
      path: "/portfolio/clinc",
      name: "clinc",
      component: Clinc
    },
    {
      path: "/resume",
      name: "resume",
      component: Resume
    },
  ]
});

new Vue({
  router,
  el: "#app",
  render: h => h(App)
});
