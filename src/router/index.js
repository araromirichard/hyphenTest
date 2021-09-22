import Vue from "vue";
import VueRouter from "vue-router";
import Formlayout from "../views/Form-layout.vue";
import OnBoarding from "../views/OnboardingPage.vue";
import MainLayout from "../views/MainLayout.vue";
import Index from "../views/Inbox/Index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login",
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
    path: "/workflow/rules-edit",
    name: "WorkflowRulesEdit",
    components: {
      default: () => import("@/views/workflow/RulesEdit.vue"),
      MainLayout,
    },
  },
  {
    path: "/inbox",
    name: "Inbox",
    components: {
      default: Index,
      MainLayout,
    },
  },
  // { path: "forms", name: "Forms", component: Forms },
  // { path: ":id", name: "", component: Forms },
  // { path: ":id/build", name: "", component: Forms },
  // { path: "review", name: "Review", component: Review },
  {
    path: "/payable",
    name: "Payables",
    components: {
      default: () => import("@/views/navigation-bar/Payables.vue"),
      MainLayout,
    },
  },
  // {
  //   path: "/invoice",
  //   name: "Invoice",
  //   components: {
  //     default: () => import("@/views/navigation-bar/Invoice.vue"),
  //     MainLayout,
  //   },
  // },
  // {
  //   path: "/inbox/email",
  //   name: "Email",
  //   components: {
  //     default: () => import("@/views/Inbox/Email.vue"),
  //     MainLayout,
  //   },
  // },
  {
    path: "/inbox/:id",
    name: "Invoice",
    components: {
      default: () => import("@/views/navigation-bar/Invoice.vue"),
      MainLayout,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: "active",
});

export default router;
