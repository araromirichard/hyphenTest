import Vue from "vue";
import VueRouter from "vue-router";
import Formlayout from "../views/Form-layout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Form-layout",
    component: Formlayout,
  },
  {
    path: "/login",
    name: "Login",
    component: Formlayout,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () =>
    // import(/* webpackChunkName: "login" */ "../components/SignUp.vue"),
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: Formlayout,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () =>
    // import(/* webpackChunkName: "sign-up" */ "../components/SignUp.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
