import Vue from "vue";
import Router from "vue-router";
import App from "./App.vue";
import vuetify from '@/plugins/vuetify' // path to vuetify export
import 'babel-polyfill';
import VueAnalytics from 'vue-analytics'

import Home from "./components/Home.vue";
// import Resume from "./components/Resume.vue";
import DisruptedEntry from "./components/DisruptedEntry.vue";
import NewsFeeling from "./components/NewsFeeling.vue";
import Drumrose from "./components/Drumrose.vue";
import Disruption from "./components/Disruption.vue";
import Dreamgigs from "./components/Dreamgigs.vue";
import SubwayGuide from "./components/SubwayGuide.vue";
import GenreMixer from "./components/GenreMixer.vue";
import Clinc from "./components/Clinc.vue";
import SevenInSeven from "./components/7-in-7.vue";


const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
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
    {
      path: "/subway-guide",
      name: "subway_guide",
      component: SubwayGuide
    },
    {
      path: "/drumrose",
      name: "drumrose",
      component: Drumrose
    },
    {
      path: "/news-feeling",
      name: "news_feeling",
      component: NewsFeeling
    },
    {
      path: "/disrupted-entry",
      name: "disrupted_entry",
      component: DisruptedEntry
    },
  ],
});

Vue.use(
  Router,
  VueAnalytics, {
    id: 'G-Q4YS1F5EBG',
    router
  }
);

new Vue({
  router,
  vuetify,
  el: '#app',
  render: h => h(App)
})
