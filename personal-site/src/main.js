import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import About from './components/About.vue'
Vue.use(Router)

const router = new Router({
 routes: [
   {
     path: '/',
     name:'home',
     component: About,
   },
   {
     path: '/about',
     name:'about',
     component: About,
   }
 ]
})

new Vue({
 el: '#app',
 render: h => h(App),
 router
})
