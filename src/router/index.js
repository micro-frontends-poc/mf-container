import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import Iframes from "../views/Iframes.vue"
import WebComponents from "../views/WebComponents.vue"
import JavaScript from "../views/JavaScript.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/iframes",
    name: "Iframes",
    component: Iframes
  },
  {
    path: "/web-components",
    name: "WebComponents",
    component: WebComponents
  },
  {
    path: "/javascript",
    name: "JavaScript",
    component: JavaScript
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
