import Vue from "vue";
import VueRouter from "vue-router";
import Formlayout from "../views/Form-layout.vue";
import OnBoarding from "../views/OnboardingPage.vue";
import MainLayout from "../views/MainLayout.vue";

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
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: Formlayout,
  },
  {
    path: "/onboarding",
    name: "OnBoarding",
    component: OnBoarding,
  },
  {
    path: "/welcome",
    name: "Welcome",
    components: {
      default: () => import("@/views/navigation-bar/WelcomePage.vue"),
      MainLayout,
    },
  },
  {
    path: "/insight",
    name: "Insight",
    components: {
      default: () => import("@/views/navigation-bar/Insight.vue"),
      MainLayout,
    },
  },
  {
    path: "/workflow",
    name: "Workflow",
    components: {
      default: () => import("@/views/navigation-bar/Workflow.vue"),
      MainLayout,
    },
  },
  {
    path: "/message",
    name: "Inbox",
    components: {
      default: () => import("@/views/navigation-bar/Inbox.vue"),
      MainLayout,
    },
  },
  {
    path: "/payable",
    name: "Payables",
    components: {
      default: () => import("@/views/navigation-bar/Payables.vue"),
      MainLayout,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
