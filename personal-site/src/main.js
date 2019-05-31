import Vue from "vue";
import Router from "vue-router";
import App from "./App.vue";
import About from "./components/About.vue";
import Home from "./components/Home.vue";
import Work from "./components/Work.vue";
import Photos from "./components/Photos.vue";
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
      path: "/work",
      name: "work",
      component: Work
    },
    {
      path: "/photography",
      name: "photography",
      component: Photos
    }
  ]
});

new Vue({
  router,
  el: "#app",
  render: h => h(App)
});
