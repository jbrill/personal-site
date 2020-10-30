import Vue from "vue";
import Router from "vue-router";
import App from "./App.vue";
import vuetify from '@/plugins/vuetify' // path to vuetify export
import 'babel-polyfill';


// import About from "./components/About.vue";
// import Home from "./components/Home.vue";
// import Resume from "./components/Resume.vue";

// import Portfolio from "./components/Portfolio.vue";
// import Neptune from "./components/Neptune.vue";
import Disruption from "./components/Disruption.vue";
import Dreamgigs from "./components/Dreamgigs.vue";
// import MusicAndCulture from "./components/MusicAndCulture.vue";
import GenreMixer from "./components/GenreMixer.vue";
import Clinc from "./components/Clinc.vue";
import SevenInSeven from "./components/7-in-7.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
    },
    // {
    //   path: "/vis",
    //   name: "vis",
    //   component: Home
    // },
    // {
    //   path: "/about",
    //   name: "about",
    //   component: About
    // },
    // {
    //   path: "/portfolio",
    //   name: "portfolio",
    //   component: Portfolio
    // },
    // {
    //   path: "/portfolio/neptune",
    //   name: "neptune",
    //   component: Neptune
    // },
    // {
    //   path: "/portfolio/music_and_culture",
    //   name: "music_and_culture",
    //   component: MusicAndCulture
    // },
    {
      path: "/disruption",
      name: "disruption",
      component: Disruption
    },
    {
      path: "/dreamgigs",
      name: "dreamgigs",
      component: Dreamgigs
    },
    {
      path: "/genre-mixer",
      name: "genre_mixer",
      component: GenreMixer
    },
    {
      path: "/clinc",
      name: "clinc",
      component: Clinc
    },
    {
      path: "/7-in-7",
      name: "7-in-7",
      component: SevenInSeven
    },
    // {
    //   path: "/resume",
    //   name: "resume",
    //   component: Resume
    // },
  ],
  scrollBehavior (to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ x: 0, y: 800 })
      }, 500)
    })
  }
});

new Vue({
  router,
  vuetify,
  el: '#app',
  render: h => h(App)
})
