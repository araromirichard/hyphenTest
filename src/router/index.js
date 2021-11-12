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
    path: "/form/create-new-form",
    name: "Create-form",
    components: {
      default: () => import("@/views/Create-new-form"),
      MainLayout,
    },
  },
  {
    path: "/form/:id",
    name: "Render-form",

    props: true,
    components: {
      default: () => import("@/views/Render-new-form"),
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

  {
    path: "/payable",
    name: "Payables",
    components: {
      default: () => import("@/views/navigation-bar/Payables.vue"),
      MainLayout,
    },
  },
  {
    path: "/form",
    name: "Form",
    components: {
      default: () => import("@/views/navigation-bar/Form.vue"),
      MainLayout,
    },
  },
  {
    path: "/inbox/:id",
    name: "inbox.invoice",
    props: true,
    components: {
      default: () => import("@/views/navigation-bar/Invoice.vue"),
      MainLayout,
    },
  },
  // {
  //   path: "/payable/:id",
  //   name: "payableDetails",
  //   props: true,
  //   components: {
  //     default: () => import("@/views/includes/overlays/PayableDetails.vue"),
  //     MainLayout,
  //   },
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: "active",
});

export default router;
