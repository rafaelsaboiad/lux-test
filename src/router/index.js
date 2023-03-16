import { createRouter, createWebHashHistory } from "vue-router";
import home from "../views/home.vue";
import header from "../components/header.vue";
import listRepos from "../views/listRepos.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: home,
  },
  {
    path: "/header",
    name: "header",
    component: header,
  },
  {
    path: "/listRepos/:searchQuery",
    name: "ListRepos",
    component: listRepos,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
