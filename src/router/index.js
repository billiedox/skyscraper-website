import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// import MintLandEventView from "../views/MintLandEventView.vue";
// import MintlandView from "../views/MintlandView.vue";
import PrivacyPolicyView from "../views/PrivacyPolicyView.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    // {
    //     path: '/mintlandevent',
    //     name: 'mintlandevent',
    //     component: MintLandEventView
    // },
    // {
    //     path: '/mintland',
    //     name: 'mintland',
    //     component: MintlandView
    // },
    {
        path: "/privacy-policy",
        name: "privacypolicy",
        component: PrivacyPolicyView,
    },
    // {
    //   path: "/mintland",
    //   name: "mintland",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "../views/MintlandView.vue"),
    // },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    //  scrollBehavior: (to, from, savedPosition) => {
    //   if (savedPosition) {
    //     return savedPosition;
    //   } else if (to.hash) {
    //     return {
    //       selector: to.hash,
    //       behavior: 'smooth'
    //     };
    //   } else {
    //     return { x: 0, y: 0 };
    //   }
    // }
});

export default router;
