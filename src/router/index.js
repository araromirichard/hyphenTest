import Vue from "vue";
import VueRouter from "vue-router";
import Formlayout from "../views/Form-layout.vue";
import OnBoarding from "../views/OnboardingPage.vue";
import MainLayout from "../views/MainLayout.vue";
import Email from "../views/Inbox/Email.vue";
import Forms from "../views/Inbox/Forms.vue";
import Review from "../views/Inbox/Review.vue";

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
    path: "/inbox",
    name: "Inbox",
    components: {
      default: () => import("@/views/Inbox/Index.vue"),
      MainLayout,
    },

    //Child routes
    children: [
      { path: "email", name: "Email", component: Email },
      { path: "forms", name: "Forms", component: Forms },
      { path: "forms/:id", name: "", component: Forms },
      { path: "forms/:id/build", name: "", component: Forms },
      { path: "review", name: "Review", component: Review },
    ],
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
