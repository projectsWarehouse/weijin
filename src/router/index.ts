import {
  createWebHashHistory,
  createRouter,
  createWebHistory,
} from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "Home",
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("@/views/index.vue"),
      },
      {
        path: "blockchain",
        name: "blockchain",
        component: () => import("@/views/blockchain.vue"),
      },
      {
        path: "store",
        name: "store",
        component: () => import("@/views/store.vue"),
      },
      {
        path: "sigrid",
        name: "sigrid",
        component: () => import("@/views/sigrid.vue"),
      },
      {
        path: "news",
        name: "news",
        component: () => import("@/views/news.vue"),
      },
      {
        path: "new",
        name: "new",
        component: () => import("@/views/new.vue"),
      },
      {
        path: "aboutprep",
        name: "aboutprep",
        component: () => import("@/views/aboutprep.vue"),
      },
      {
        path: "contact",
        name: "contact",
        component: () => import("@/views/contact.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  // history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
