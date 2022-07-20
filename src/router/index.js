import Vue from "vue";
import VueRouter from "vue-router";
import Formlayout from "../views/Form-layout.vue";
import OnBoarding from "../views/OnboardingPage.vue";
import MainLayout from "../views/MainLayout.vue";
import Index from "../views/Inbox/Index.vue";
import errorPage from "../views/error-page.vue";

import _middleware from "./middleware";
import store from "../store";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        redirect: "/login",
        name: "Form-layout",
        component: Formlayout,
    },
    {
        path: "/error",
        component: errorPage,
    },
    {
        path: "/login",
        name: "Login",
        component: Formlayout,
        meta: { middleware: ["guest"] },
    },
    {
        path: "/forgot-password",
        name: "forgot-password",
        component: Formlayout,
        meta: { middleware: ["guest"] },
    },
    {
        path: "/reset-password/:token",
        name: "reset-password",
        component: Formlayout,
        // meta: { middleware: ["guest", "auth"] },
    },
    {
        path: "/pending-activation",
        name: "pending",
        components: {
            default: () =>
                import ("@/views/pending-activation.vue"),
        },
        meta: { middleware: ["auth"] },
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
        path: "/organizations",
        name: "organizationList",
        components: {
            default: () =>
                import ("@/views/organizationList.vue"),
        },
        meta: { middleware: ["auth"] },
    },
    {
        path: "/welcome",
        name: "Welcome",
        components: {
            default: () =>
                import ("@/views/navigation-bar/WelcomePage.vue"),
            MainLayout,
        },
        meta: { middleware: ["auth"] },
    },
    {
        path: "/insight",
        name: "Insight",
        components: {
            default: () =>
                import ("@/views/navigation-bar/Insight.vue"),
            MainLayout,
        },
        meta: { middleware: ["auth"] },
    },
    {
        path: "/workflow",
        name: "Workflow",
        components: {
            default: () =>
                import ("@/views/navigation-bar/Workflow.vue"),
            MainLayout,
        },
        meta: { middleware: ["auth"] },
    },
    {
        path: "/workflow/new",
        name: "NewWorkFlow",
        components: {
            default: () =>
                import ("@/views/workflow/new.vue"),
            MainLayout,
        },
        meta: { middleware: ["auth"] },
    },
    {
        path: "/workflow/:id",
        name: "EditWorkflow",
        components: {
            default: () =>
                import ("@/views/workflow/view.vue"),
            MainLayout,
        },
        meta: { middleware: ["auth"] },
    },
    {
        path: "/workflow/old",
        name: "NewWorkFlow",
        components: {
            default: () =>
                import ("@/views/workflow/RulesEdit.vue"),
            MainLayout,
        },
        meta: { middleware: ["auth"] },
    },
    // {
    //   path: "/workflow/:id",
    //   name: "WorkflowRulesEdit",
    //   components: {
    //     default: () => import("@/views/workflow/RulesEdit.vue"),
    //     MainLayout,
    //   },
    //   meta: { middleware: ["auth"] },
    // },
    {
        path: "/form/create-new-form",
        name: "Create-form",
        components: {
            default: () =>
                import ("@/views/Create-new-form"),
            MainLayout,
        },
        meta: { middleware: ["auth"] },
    },
    {
        path: "/edit-form/:id",
        name: "EditForm",
        props: true,
        components: {
            default: () =>
                import ("@/views/Edit-form"),
            MainLayout,
        },
        meta: { middleware: ["auth"] },
    },
    {
        path: "/form/:id",
        name: "entries",

        props: true,
        components: {
            default: () =>
                import ("@/views/form/entries"),
            MainLayout,
        },
        meta: { middleware: ["auth"] },
    },
    {
        path: "/inbox",
        name: "Inbox",
        components: {
            default: Index,
            MainLayout,
        },
        meta: { middleware: ["auth"] },
    },

    {
        path: "/payable",
        name: "Payables",
        components: {
            default: () =>
                import ("@/views/navigation-bar/Payables.vue"),
            MainLayout,
        },
        meta: { middleware: ["auth"] },
    },
    {
        path: "/receivables",
        name: "Receivables",
        components: {
            default: () =>
                import ("@/views/navigation-bar/Receivable.vue"),
            MainLayout,
        },
        meta: { middleware: ["auth"] },
    },
    {
        path: "/contacts",
        name: "Contacts",
        components: {
            default: () =>
                import ("@/views/navigation-bar/Contacts.vue"),
            MainLayout,
        },
        meta: { middleware: ["auth"] },
    },
    {
        path: "/form",
        name: "Form",
        components: {
            default: () =>
                import ("@/views/navigation-bar/Form.vue"),
            MainLayout,
        },
        meta: { middleware: ["auth"] },
    },
    {
        path: "/contact/:id",
        name: "contact.customer",
        props: true,
        components: {
            default: () =>
                import ("@/components/Contacts/SingleContactPage.vue"),
            MainLayout,
        },
        meta: { middleware: ["auth"] },
    },
    {
        path: "/inbox/:id",
        name: "inbox.invoice",
        props: true,
        components: {
            default: () =>
                import ("@/views/navigation-bar/Invoice.vue"),
            MainLayout,
        },
        meta: { middleware: ["auth"] },
    },
    {
        path: "/approval",
        name: "Approval",
        components: {
            default: () =>
                import ("@/views/approval.vue"),
            Formlayout,
        },
    },
    {
        path: "/settings",
        props: true,
        components: {
            default: () =>
                import ("@/views/navigation-bar/Settings.vue"),
            MainLayout,
        },
        redirect: { name: "settings.organization" },
        children: [{
                name: "settings.profile",
                path: "profile",
                components: {
                    default: () =>
                        import ("@/views/settings/Profile.vue"),
                },
            },
            {
                path: "api",
                components: {
                    default: () =>
                        import ("@/views/settings/Api.vue"),
                },
            },
            {
                path: "bank",
                components: {
                    default: () =>
                        import ("@/views/settings/Bank.vue"),
                },
            },

            {
                name: "settings.organization",
                path: "Organization",
                components: {
                    default: () =>
                        import ("@/views/settings/Organization.vue"),
                },
            },
            {
                path: "security",
                components: {
                    default: () =>
                        import ("@/views/settings/Security.vue"),
                },
            },
            {
                path: "apps",
                components: {
                    default: () =>
                        import ("@/views/settings/ThirdPartyApps.vue"),
                },
            },
        ],

        meta: { middleware: ["auth"] },
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
    const globalMiddlewares = _middleware.global ?
        Object.keys(_middleware.global) :
        [];

    // add the two middleware arrays together and create a new array with no duplicate middleware names
    const middlewares = [
        ...new Set(globalMiddlewares.concat(routeMiddlewares || [])),
    ];

    // flatten middleware object list
    const MIDDLEWARE = {..._middleware, ..._middleware.global };
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
        middlewares.forEach(async(m) => {
            try {
                await MIDDLEWARE[m]({ to, from, store, redirect });
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