import Vue from "vue"
import VueRouter from "vue-router"
import Home from "@/views/Home.vue"
import Iframes from "@/views/Iframes.vue"
import JavaScript from "@/views/JavaScript.vue"
import WebComponents from "@/views/WebComponents.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/iframes",
    name: "iframes",
    component: Iframes
  },
  {
    path: "/javascript",
    name: "javascript",
    component: JavaScript
  },
  {
    path: "/web-components",
    name: "web-components",
    component: WebComponents
  },
  {
    path: "/other",
    name: "OtherMethods",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "other" */ "../views/OtherMethods.vue")
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
