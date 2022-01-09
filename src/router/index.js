import Vue from "vue";
import VueRouter from "vue-router";
import Formlayout from "../views/Form-layout.vue";
import OnBoarding from "../views/OnboardingPage.vue";
import MainLayout from "../views/MainLayout.vue";
import Index from "../views/Inbox/Index.vue";

import _middleware from "./middleware";
import store from "../store";


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
    meta: { middleware: ["guest"] },
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: Formlayout,
    meta: { middleware: ["guest"] },
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
    path: "/workflow/rules-edit/:id",
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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: "active",
});




 router.beforeEach((to, from, next) => {
  
    // middleware specified in route config
  const routeMiddlewares = to.meta.middleware;

  // middleware specified in global config
  const globalMiddlewares = _middleware.global ? Object.keys(_middleware.global) : [];

  // add the two middleware arrays together and create a new array with no duplicate middleware names
  const middlewares = [...new Set(globalMiddlewares.concat(routeMiddlewares || []))];

  // flatten middleware object list 
  const MIDDLEWARE = {..._middleware,..._middleware.global}
  delete MIDDLEWARE.global;


  // redirection callback
  const redirect = (route) => {
    if (process.env.NODE_ENV === "development") {
      console.log("redirect to... " + route);
    }
    next(route);
  };


  // if middleware is not defined, just continue to the route
  if (middlewares && middlewares.length > 0) {
     middlewares.forEach(async (m) => {
      try {
        await  MIDDLEWARE[m]({ to, from, store, redirect });
      } catch (e) {
        if (process.env.NODE_ENV === "development") {
          console.log(JSON.stringify(e, null, 2));
        }
      }
    });
  }

  next();
});

export default router;
