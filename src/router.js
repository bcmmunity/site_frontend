import Vue from 'vue'
import Router from 'vue-router'

import Home from "./pages/Home";
import WeAre from "./pages/WeAre";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/we_are',
      component: WeAre
    }
  ]
})
